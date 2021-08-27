const DrawZoneElement = document.getElementById('DrawZone');

let width = 50;
let height = 50;
let zone = [];
let feather = 1;

const Generate = (height, width) => {
    let DrawZoneStyle = "grid-template-columns:";
    for (let i = 0; i < width; i++) {
        DrawZoneStyle += " 16px";
    }
    DrawZoneStyle += ";";

    DrawZoneStyle += `width: ${width * 16}px;`;

    DrawZoneElement.style = DrawZoneStyle;
    let cells_element = '';
    for (let cell = 0; cell < height * width; cell++) {
        cells_element += `<div onclick="Click('${cell}', ${width})" `;
        cells_element += `id="cell${cell}" `;
        cells_element += "class='cell' align='center'></div>";
    }
    DrawZoneElement.innerHTML = cells_element;

    for (let line = 0; line < height; line++){
        let arr = [];
        for (let cell = 0; cell < width; cell++){
            arr.push(0)
        }
        zone.push(arr)
    }

};

const Click = (cell_id) => {
    if(feather == 0 || feather == 1 || feather == 2){
        const CellElement = document.getElementById("cell" + cell_id);
        CellElement.innerHTML = 1;
        CellElement.style = "color: green;";
        zone[Math.floor(cell_id / width)][Math.floor(cell_id - Math.floor(cell_id / width) * width)] = 1;
    }
    if(feather == 1 || feather == 2){
        const CellElement2 = document.getElementById("cell" + (+cell_id + width));
        CellElement2.innerHTML = 1;
        CellElement2.style = "color: green;";
        zone[Math.floor(cell_id / width + 1)][Math.floor(cell_id - Math.floor(cell_id / width) * width)] = 1;
        const CellElement3 = document.getElementById("cell" + (+cell_id - width));
        CellElement3.innerHTML = 1;
        CellElement3.style = "color: green;";
        zone[Math.floor(cell_id / width - 1)][Math.floor(cell_id - Math.floor(cell_id / width) * width)] = 1;
        const CellElement4 = document.getElementById("cell" + (+cell_id + 1));
        CellElement4.innerHTML = 1;
        CellElement4.style = "color: green;";
        zone[Math.floor(cell_id / width)][Math.floor(cell_id - Math.floor(cell_id / width) * width) + 1] = 1;
        const CellElement5 = document.getElementById("cell" + (+cell_id - 1));
        CellElement5.innerHTML = 1;
        CellElement5.style = "color: green;";
        zone[Math.floor(cell_id / width)][Math.floor(cell_id - Math.floor(cell_id / width) * width) - 1] = 1;
    }
    if(feather == 2){
        const CellElement6 = document.getElementById("cell" + (+cell_id + 2));
        CellElement6.innerHTML = 1;
        CellElement6.style = "color: green;";
        zone[Math.floor(cell_id / width)][Math.floor(cell_id - Math.floor(cell_id / width) * width) + 2] = 1;
        const CellElement7 = document.getElementById("cell" + (+cell_id - 2));
        CellElement7.innerHTML = 1;
        CellElement7.style = "color: green;";
        zone[Math.floor(cell_id / width)][Math.floor(cell_id - Math.floor(cell_id / width) * width) - 2] = 1;
        const CellElement8 = document.getElementById("cell" + (+cell_id + width * 2));
        CellElement8.innerHTML = 1;
        CellElement8.style = "color: green;";
        zone[Math.floor(cell_id / width + 2)][Math.floor(cell_id - Math.floor(cell_id / width) * width)] = 1;
        const CellElement9 = document.getElementById("cell" + (+cell_id - width * 2));
        CellElement9.innerHTML = 1;
        CellElement9.style = "color: green;";
        zone[Math.floor(cell_id / width - 2)][Math.floor(cell_id - Math.floor(cell_id / width) * width)] = 1;
    }
};

Generate(height, width);