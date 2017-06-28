function renderColor(color){

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(age, name){

  const nameList = document.createElement('li')
  nameList.textContent = `Name: ${name}`
 

  const ageList = document.createElement('li')
  ageList.textContent = `Age: ${age}`

  return nameList, ageList
  
}

function renderList(ev){
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.favoriteColor.value

  const list = document.createElement('ul')

  const div = document.querySelector('#stats')

  const nameItem = document.createElement('li')
  const nameList = renderListItem(name, age)
  nameItem.appendChild(nameList)
  list.appendChild(nameItem)
 

  const ageItem = document.createElement('li')
  const ageList = renderListItem(name,age)
  ageItem.appendChild(ageList)
  list.appendChild(ageItem)


  const colorItem = document.createElement('li')
  const colorDiv = renderColor(color)
  colorItem.textContent = 'Favorite Color: '
  colorItem.appendChild(colorDiv)
  list.appendChild(colorItem)

  div.appendChild(list)

  // renderColor(color)
  // renderListItem(nameItem, ageItem)

}

function handleSubmit(ev) {
  ev.preventDefault()
  

  renderList(ev)
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
