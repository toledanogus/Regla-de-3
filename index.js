let x1, y1, x2, resultado, texto;


calcular = ()=>{
    x1=document.getElementById('x1').value;
    console.log(x1);
    y1=document.getElementById('y1').value;
    console.log(y1);
    x2=document.getElementById('x2').value;
    console.log(x2);
    resultado = ((x2*y1)/x1).toFixed(2)
    if (isNaN(resultado)) {
        texto = document.getElementById('result')
        texto.innerText="0"
    }
    else {
        texto.innerText=resultado;
        console.log(resultado);
    }
    
    
}