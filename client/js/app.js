import { Ham } from './Ham.js'
import { Scroll } from './Scroll.js'
import { Form } from './Form.js'


document.addEventListener("DOMContentLoaded", () => {
    Ham()
    Scroll()
    Form()
    
    let spiner = document.querySelector('.spiner') 
    function off(){
        spiner.style.display = 'none'
    }
    setTimeout(off , 1000)
    spiner.classList.add('spiner--off')
})
