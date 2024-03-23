/*Função Responsavel por Mostrar ao interagir com o menu*/   
function clickMenu() {
  var menu_dropdown = document.getElementById("menu_dropdown");
  var menuVisible = localStorage.getItem("menu_dropdown_visible") === "true";

  if (!menuVisible) {
    menu_dropdown.style.display = "block";
    localStorage.setItem("menu_dropdown_visible", "true");
  } else {
    menu_dropdown.style.display = "none";
    localStorage.setItem("menu_dropdown_visible", "false");
  }
}

function DeslizarMenu(event){
   var limited = 50;
   var startX = event.touches[0].clientX;
   let fimX;

   function onTouchMove(event){
    fimX = event.touches[0].clientX;
   } 

   function onTouchEnd(){
    if(startX - fimX > limited){
      menu_dropdown = document.querySelectorAll(".dropdown").forEach((submenu)=>{
        submenu.style.display = "none";
      });
   }
}

let touchmove =
document.addEventListener("touchmove", onTouchMove); 

let touchend =
document.addEventListener("touchend", onTouchEnd);

}
