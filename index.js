function changeHeading(ev) {
    
    ev.target.textContent = 'clickety click'
}

const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    changeHeading('So Fancy')}) 

const p = document.querySelector('p#instructions')
p.addEventListener('click', changeHeading)