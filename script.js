const btn = document.getElementsByClassName('numericos')
const displayDown = document.getElementById('displayDown')
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        const content = btn[i].innerText
        displayDown.innerHTML += content
    })
}

