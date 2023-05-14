const list_sections = document.querySelectorAll(".secciones .sect");
const links = document.querySelectorAll("#navbar a");



const observer = new IntersectionObserver((entradas, observador)=>{
   
    entradas.forEach(item =>{
    if(item.isIntersecting){
        const id = '#' + item.target.id;
        history.pushState({}, item.target.innerText, id); //para modificar la barra de direcciones
      
        links.forEach(link_menu =>{
        const  href = link_menu.attributes.href.nodeValue;
        link_menu.classList.remove("activo");
        if(href === id){
            console.log(link_menu);
            link_menu.classList.add("activo");
        }
       })
    }
   })
}, {
    threshold: 0.1, //para que todo el encabezado entre dentro de pantalla. !!!!!si lo aumento deja de verse la seccion projects.
    rootMargin: "0px 0px -50% 0px" //establece los margenes del viewport
});


//con esta instruccion hago que se observe cada seccion destro de la lista de secciones.
//cada vez que un item entra en pantalla se ejecuta el código.
list_sections.forEach(item => {
  observer.observe(item);
});
