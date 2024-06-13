import './style.css'
import loadInitialPage from './loadInitialPage'
import loadAboutPage from './loadAboutPage'
import loadMenuPage from './loadMenuPage'

console.log('Hello world!')

const navs = [loadInitialPage, loadAboutPage, loadMenuPage]
const contentComponent = document.querySelector('#content')
const btns = document.querySelectorAll('.btn-nav')

loadInitialPage(contentComponent)

btns.forEach((btn, idx) => {
    btn.addEventListener('click', ()=>{
        contentComponent.replaceChildren()
        navs[idx](contentComponent)
    })
})