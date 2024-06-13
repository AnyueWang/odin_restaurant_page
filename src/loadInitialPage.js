import ImageRestaurant from './restaurant.jpeg'

function loadInitialPage(component) {
    const title = document.createElement('h1')
    title.innerText = 'Chief Wong'

    const img = new Image()
    img.src = ImageRestaurant
    img.classList.add('restaurant')

    const description = document.createElement('p')
    description.innerText = 'Chief Wong will offer you fantastic and delicious food as you wish. Just order what you imagine, we will realize all your wishes.'
    description.classList.add('description')

    component.appendChild(title)
    component.appendChild(img)
    component.appendChild(description)

}

export default loadInitialPage