const btn = document.getElementById('btnSearch');
const input = document.getElementById('search')
const boxcloseinput = document.getElementById('closeinput')
const menu = document.getElementById('menu');
const btnMenu = document.getElementById('btnMenu');




document.addEventListener('click',(e)=>{
  if(e.target.className =="fa-solid fa-magnifying-glass"){
    input.style.width ='80%'
    input.focus()
  }
  else{
    input.style.width ='0%'
  }
})

btnMenu.addEventListener('click',()=>{
    if(document.getElementById('menu').style.marginLeft =='-255px'){
      document.getElementById('menu').style.marginLeft ='0px'
    }else{
      document.getElementById('menu').style.marginLeft ='-255px'
    }
})
