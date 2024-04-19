function MostrarMenu(){
    let div = document.querySelector('.nav-mobile')
    let btn = document.getElementById("btn1")
    if (div.classList.contains('open')) {
        div.classList.remove('open')
        btn.innerHTML = '<s><i class="fa-solid fa-bars"></i></s>'
    } else {
        div.classList.add('open');
        btn.innerHTML = '<s><i class="fa-solid fa-x"></i></s>'
    }
}
if (Number(document.body.style.maxWidth) > 768) {   
    let div = document.querySelector('.nav-mobile')
    if (div.classList.contains('open')) {
        div.classList.remove('open')
    }
}