let x1, y1, x2, resultado, texto;


calcular = ()=>{
    x1=document.getElementById('x1').value;
    y1=document.getElementById('y1').value;
    x2=document.getElementById('x2').value;
    resultado = ((x2*y1)/x1)
    if (resultado % 1 != 0) {
        resultado = resultado.toFixed(2)
    }
    if (isNaN(resultado)) {
        texto = document.getElementById('result')
        texto.innerText="0"
    }
    else {
        texto = document.getElementById('result')
        texto.innerText=resultado;
        console.log(resultado);
    }
    
    
}