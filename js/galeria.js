const hamburger1 = document.querySelector('.hamburger')
const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen ')
const contenedorLight = document.querySelector('.image-light');

imagenes.forEach(imagen => {
     imagen.addEventListener('click',() => {
        aparecerImagen(imagen.getAttribute('src'));

     })
           
    });


  

const aparecerImagen=(imagen) => {
    imageneslight.src=imagen;
    contenedorLight.classList.toggle('show');
    imageneslight.classList.toggle('showImage')
    hamburger1.style.opacity=''
}

        
    
contenedorLight.addEventListener('click',(e)=>{
    if(e.target!=imageneslight){
        contenedorLight.classList.toggle('show');
        imageneslight.classList.toggle('showImage')
        hamburger1.style.opacity=''
    }
})


