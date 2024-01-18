let simbolosDisponibles= ["&#128151;", "&#128140;", "&#128158;"]
let listaCasillas = []
let numeroTurno=1

function crearCasillas(){
    
    for (let i=0; i<simbolosDisponibles.length; i++){
        let casilla1 = {
            simbolo: simbolosDisponibles[i],
            mostrandoSimbolos: false
        }
        let casilla2={
            simbolo: simbolosDisponibles[i],
            mostrandoSimbolos: false
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
        
    }
}

function devolverCasilla(row,col){
    const pos= (row*3) + col
    return listaCasillas[pos]
}

function ponerSimbolosCasillas(){
    for(let i=0; i<2;i++){
        for(let j=0;j<3;j++){
            const but = document.getElementById(i+"_"+j)
            const casilla= devolverCasilla(i,j)
            if (casilla.mostrandoSimbolos){
                but.innerHTML=casilla.simbolo
            }else{
                but.innerHTML="UL"
            }
        }
    }
}

function casillaOnClick(row,col){
    //Obtener casilla en la que se hizo click
    const casillaSeleccionada= devolverCasilla(row,col)
    if (numeroTurno==1){
        casillaSeleccionada.mostrandoSimbolos=true
        casillaTurnoAnterior=casillaSeleccionada
        numeroTurno=2
        ponerSimbolosCasillas()
    }else{
        casillaSeleccionada.mostrandoSimbolos=true
        ponerSimbolosCasillas()
        //Verificar si son iguales
        if(casillaTurnoAnterior.simbolo!=casillaSeleccionada.simbolo){
            setTimeout((function(){
                casillaSeleccionada.mostrandoSimbolos=false
                casillaTurnoAnterior.mostrandoSimbolos=false
                ponerSimbolosCasillas()
                casillaTurnoAnterior=null
                numeroTurno=1
            }),2000)
        }else{
            //Caso correcto
            casillaTurnoAnterior=null
            numeroTurno=1
        }
        
    }
}

function main(){
    crearCasillas()
    ponerSimbolosCasillas()
}

main()