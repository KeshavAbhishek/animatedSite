function hovered(){
  document.getElementById('listParent').style.transform='translateY(0%)';
  document.getElementById('icon').style.transform='rotate(180deg)';
}
function onSelection(){
  if(window.innerWidth<=700){
  document.getElementById('listParent').style.transform='translateY(-200%)';
  document.getElementById('navbar').style.paddingBottom='0%';
  }
}
function showNavLinks(){
  // document.getElementById('listParent').style.display='flex';
  if(document.getElementById('listParent').style.transform=='translateY(-200%)'){
  document.getElementById('navbar').style.paddingBottom='2%';
  hovered();
  }
  else{
  document.getElementById('listParent').style.transform='translateY(-200%)'
  document.getElementById('navbar').style.paddingBottom='0%';
  document.getElementById('icon').style.transform='rotate(0deg)';
  }
}
window.addEventListener('resize',()=>{
  if(window.innerWidth>=701){
  document.getElementById('listParent').style.transform='translateY(0%)';
  }
  else{
  document.getElementById('listParent').style.transform='translateY(-200%)';
  }
})

if(window.innerWidth<=700){document.getElementById('listParent').style.transform='translateY(-200%)';}
var navList = document.getElementsByClassName('nav-links')
for (const k of navList) {
  k.addEventListener('click',onSelection)
}