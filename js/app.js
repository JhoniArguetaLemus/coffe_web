const navbar = document.getElementById("navbar");


  window.addEventListener("scroll", () => {
       if (window.scrollY > 50) {  // Puedes cambiar 50 por cualquier valor
        navbar.classList.add("scrolled");
       } else {
        navbar.classList.remove("scrolled");
      }
    });


const btnMenu=document.getElementById("btnMenu");
const menuList=document.getElementById("menuList");

btnMenu.addEventListener('click', ()=>{
    menuList.classList.toggle('hidden');

})