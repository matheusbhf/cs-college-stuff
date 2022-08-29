function sorteioMega () {   
    var resultado = [];
    for (let i = 0; resultado.length < 6; i++) {
        var numero = Math.ceil(Math.random()*61);
        
        if (!verRep(numero, resultado)) {
            resultado.push(numero);
        }     
    }
    
    return resultado;
}

function verRep(numero, resultado) {
    var existe = false;
        
    for (let a=0; a<resultado.length; a++) {
            if (numero == resultado[a]) {
                existe = true; 
            }
    }
    return existe;
}




