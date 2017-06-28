function renderColor(color, colorItem){

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  colorItem.appendChild(colorDiv)

}
function renderListItem(nameItem, ageItem, age, name){

  const nameList = document.createElement('li')
  nameList.textContent = `Name: ${name}`
  nameItem.appendChild(nameList)

  const ageList = document.createElement('li')
  ageList.textContent = `Age: ${age}`
  ageItem.appendChild(ageList)
}

function renderList(){
  
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.favoriteColor.value

  const div = document.querySelector('#stats')
  
  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
 // list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  //list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '

  renderColor(color,colorItem)
  renderListItem(nameItem, ageItem)

  list.appendChild(nameItem)
  
  list.appendChild(ageItem)

  list.appendChild(colorItem)

  div.appendChild(list)

  // div.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // div.innerHTML = `<p style="background-color: ${color}">${name}, age ${age}</p>`
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
