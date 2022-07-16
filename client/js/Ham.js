export const Ham = () => {
    const ham = document.querySelector('.ham')
    const ul = document.querySelector('.nav__ul')
    const head = document.querySelector('.header')
    const nav = document.querySelector('.nav')
    const bg = document.querySelector('.bg')



    
    
    
    const close = () => {
        nav.style.right = '-100%'
        document.body.style.overflowY = 'auto'
        bg.style.display = 'none'
        ham.classList.remove('ham-act')
    }
    
    ham.addEventListener('click', () => {
        if (!ham.classList.contains('ham-act')) {
            ham.classList.add('ham-act')
            nav.style.right = '0'
            document.body.style.overflowY = 'hidden'
            bg.style.display = 'flex'
            return
        }
        close()
    })

    function scrollHeandler ( todo ) {
        let content = todo
        let section = document.querySelector(`.${content}`)
        section.scrollIntoView({behavior: "smooth"})
        close()
    }

    ul.addEventListener('click', e => {
        let item = e.target
        if(item.tagName === 'LI'){
            return scrollHeandler(item.id)
        }
        if(item.tagName === 'A'){
            let perent = item.closest('li')
            return scrollHeandler(perent.id)
        }
    })

    
    
    bg.addEventListener('click', () => close())


}




