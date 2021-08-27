const DrawZoneGeneraterWrapper = () => {
    let size = document.getElementById('CanvasSize').value.split('x');
    height = +size[0];
    width = +size[1];
    Generate(height, width);
    document.getElementById('CreateDrawZone').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

const CompileWrapper = (lang) => {
    Compile(lang, zone)
};
