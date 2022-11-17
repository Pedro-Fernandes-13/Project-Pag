const btn = document.getElementById('btnSearch');
const input = document.getElementById('search')
const boxcloseinput = document.getElementById('closeinput')



document.addEventListener('click',(e)=>{
  if(e.target.className =="fa-solid fa-magnifying-glass"){
    input.style.width ='80%'
    input.focus()
  }
  else{
    input.style.width ='0%'
  }
})

