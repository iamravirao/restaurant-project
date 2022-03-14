let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
  
menu.onclick=()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll=()=>{
    menu.classList.remo('fa-times')
    menu.classList.remo('active')
}
if(window scrolly>60){
    document.querySelector('#scroll-top').classList.add('active');
}else{
    document.querySelector('#scroll-top').classList.remove('active');
}
