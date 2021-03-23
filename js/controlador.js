function calcular(){ //calcula la diagonal (diagonal exterior + interior) suma "n" en diagonal exterior y "n-1" en diagonal interior
    let n = parseInt(document.getElementById("cantidad").value)
    diagonal = n+n-1
    area = 0
    for(i=0; i<diagonal; i++){
        if(i%2 === 0){
            area += n
        }else{
            area += (n-1)
        }
    }
    return area
}

function imprimirRespuesta(area){ //Muestra la respuesta en pantalla
    let respuesta = document.getElementById("respuesta")
    respuesta.innerHTML = "A = " + area
}

function dibujarRespuesta(){ //reprecenta graficamente la respuesta
    let n = parseInt(document.getElementById("cantidad").value)
    let tablero = document.getElementById("tablero")
    let tab = ""
    let vandera = true
    contadorllenos = 1
    contadorVacios = n
    for(i=0; i<n+n-1; i++){
        for(j=0; j<contadorVacios; j++){
            tab += " <div class='negro'> </div> "
        }
        for(j=0; j<contadorllenos; j++){
            tab += " <div class='blanco'> </div>"
        }
        for(j=0; j<contadorVacios; j++){
            tab += " <div class='negro'> </div> " 
        }
        tab += "<br>"
        if(vandera){
            contadorVacios--
            contadorllenos+=2
            if(contadorVacios-1 == 0 ){
                vandera=false
            }
        }else{
            contadorVacios++
            contadorllenos-=2
        }
    }
    tablero.innerHTML = tab
}

let boton = document.getElementById('boton')
boton.addEventListener("click", function(){
    let area = calcular()
    imprimirRespuesta(area)
    dibujarRespuesta()
})