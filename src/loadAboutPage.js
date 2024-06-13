function loadAboutPage(component) {
    const title = document.createElement('h1')
    title.innerText = 'About us'

    const description = document.createElement('p')
    description.innerText = 'Chief Wong is an experienced expert in making cuisines from all over the world, including Chinese 🇨🇳, Japanese 🇯🇵, Italian 🇮🇹, French 🇫🇷, Spanish 🇪🇸, Thai 🇹🇭, Korean 🇰🇷, Turkish 🇹🇷, Indian 🇮🇳, etc. If you are interested in any food, please call or email us. We will make everything you want, even something you imagine.'
    description.classList.add('description')

    const contacts = document.createElement('h2')
    contacts.innerText = 'Contacts'

    const tele = document.createElement('p')
    tele.innerText = 'Tel 📞: 123-456-789'
    tele.classList.add('description')

    const email = document.createElement('p')
    email.innerText = 'E-mail 📨: contact@chief-wong.com'
    email.classList.add('description')

    component.appendChild(title)
    component.appendChild(description)
    component.appendChild(contacts)
    component.appendChild(tele)
    component.appendChild(email)

}

export default loadAboutPage