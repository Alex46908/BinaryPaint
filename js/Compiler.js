const Compile = (lang, binary_zone) => {
    let code = '';
    if (lang == 0){
        for (let arr of binary_zone){
            let str = 'console.log("';
            for (let bin of arr){
                if (bin == 0){
                    str += "  "
                }else{
                    str += "11"
                }
            }
            str += '");\n';
            code += str;
        }
    }
    document.getElementById('Code').innerText = code;
    console.log(code);
};