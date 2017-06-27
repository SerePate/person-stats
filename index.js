function changeHeading(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value

  const h = ev.target
  const writeColor = h.favColor.value

  const heading = document.querySelector('h1')
  heading.innerHTML = name

  const paragraph = document.querySelector('div')
  paragraph.innerHTML = name + "    " + writeColor

  paragraph.style.color = writeColor; 

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `1Name: ${name}`
  list.appendChild(nameItem)

  const colorItem = document.createElement('li')
  colorItem.textContent= `Favorite Color: ${Writecolor}`
  list.appendChild(colorItem)

   
  
  
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)
