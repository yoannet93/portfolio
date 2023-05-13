const sections = document.querySelectorAll(".sect");
const links = document.querySelectorAll("#navbar a")


const observer = new IntersectionObserver((entry, observador)=>{
  entry.forEach(entry=>{
    if(entry.isIntersecting){
    const id = '#' + entry.target.id;
    links.forEach(link=>{
        link.classList.remove('activo')
        const href = link.attributes.href.nodeValue;
        if(href === id){
          link.classList.add('activo');
        }


    });
    }
  })
},{
    threshold:1,
    rootMargin: '0px 0px -50% 0px'
});

sections.forEach(item=>{
    observer.observe(item);
}); //le digo que observe cada elemento de la lista sections