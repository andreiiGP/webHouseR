addEventListener('DOMContentLoaded',()=>{

const contadores = document.querySelectorAll('.cont_cant')
const velocidad = 1000

const animar=()=>{
    for(const contador of contadores){
        const actualizar_cont=()=>{
            let cantidadmx= +contador.dataset.catidadTotal,
            valor_actu= +contador.innerTex,
            incremento=cantidadmx/velocidad

            if(valor_actu<cantidadmx){
                contador.innerTex= Math.ceil(valor_actu+incremento)
                setTimeout(actualizar_cont,5)
            }else{
                contador.innerTex=cantidadmx
            }   
           
        }
       actualizar_cont()
        
    }  
}
animar()
})  

const año = document.getElementById('año')
año.innerHTML= new Date().getFullYear();