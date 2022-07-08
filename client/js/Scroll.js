
export const Scroll = () => {

    const li = document.querySelectorAll('.nav__li')
    const header = document.querySelector('.header')
    const order = document.querySelector('.order')
    order.addEventListener('click', () => document.querySelector(`.contact`).scrollIntoView({behavior: "smooth"}))

    const sectName = [
        {name: "home", pos: 0},
        {name: "about", pos: 0}, 
        {name: "services", pos: 0}, 
        {name: "brand", pos: 0},
        {name: "contact", pos: 0}
    ]

    const scroll = (name) => {
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('nav__li-active')
        }
        let elm = document.querySelector('#'+name) 
        elm.classList.add('nav__li-active')

        let section = document.querySelector('.'+name) 
        section.classList.add('section-act')
        
    }


    
    const posFind = () => {
        sectName.map( (i) => {
            i.pos = document.querySelector(`.${i.name}`).offsetTop - window.innerHeight/3
        })
    }
    posFind()

    const findSection = () => {
        let scrollH = window.scrollY
        sectName.map( i => {
            if(scrollH > i.pos) {
                scroll(i.name)
            }
        })
    } 
    findSection()




    document.addEventListener('scroll', () => {
        findSection()
        if(window.scrollY > sectName[1].pos) {
            header.classList.add('header--active')
        } else {
            header.classList.remove('header--active')
        }
    })
    window.addEventListener('resize', () => {
        posFind()
    })
}
 
