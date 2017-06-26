function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('hi')
    heading.textContent = name
}

const personform = document.querySelector('#person-form')
personform.addEventListener('submit', changeHeading)