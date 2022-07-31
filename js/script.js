let ligar = document.querySelector('#ligar')
let desligar = document.querySelector('#desligar')
let img = document.querySelector('img')
let res = document.querySelector('.res')


ligar.addEventListener('click', ()=>{
    img.setAttribute('src', 'css/img-ligada.png')
    res.innerHTML = 'A lâmpada está ligada!'
})

desligar.addEventListener('click', ()=>{
    img.setAttribute('src', 'css/img-desligada.png') 
    res.innerHTML = 'A lâmpada está desligada!'     
})
