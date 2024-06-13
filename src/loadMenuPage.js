import ImageMenu from './menu.jpeg'

function loadMenuPage(component) {
    const title = document.createElement('h1')
    title.innerText = 'Menu'

    const img = new Image()
    img.src = ImageMenu
    img.classList.add('restaurant')

    component.appendChild(title)
    component.appendChild(img)

}

export default loadMenuPage