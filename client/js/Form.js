

export const Form = () => {
    const form = document.querySelector('.form')
    const name = document.querySelector('.form-input__name')
    const lastname = document.querySelector('.form-input__lastname')
    const mail = document.querySelector('.form-input__email')
    const phone = document.querySelector('.form-input__phone')
    const message = document.querySelector('.form-text')
    const result = document.querySelector('.result') 
    const spiner = document.querySelector('.spiner-form') 
    
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let info = { 
            name: name.value,
            lastname: lastname.value,
            mail: mail.value,
            phone: phone.value,
            message: message.value
        }
        
        
        try {
            result.style.display = 'none'
            spiner.style.display = 'flex'
            form.style.filter = 'blur(.5rem)'
            
            let response = await fetch('/api/form/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(info)
            })
            
            spiner.style.display = 'none'
            result.style.display = 'flex'
            form.style.filter = 'none'
            
            if (response.ok) {
                result.style.color = 'green'
                result.textContent = '✓ Thanks for your inquiry! '
                name.value = ''
                lastname.value = ''
                mail.value = ''
                phone.value = ''
                message.value = ''
                setTimeout(() => result.style.display = 'none', 5000)
                
            } else {
                result.style.color = 'red'
                result.textContent = 'X Something wrong, try again!'
                setTimeout(() => result.style.display = 'none', 5000)
            }
        
            
        } catch (error) {
            item.style.display = 'none'
            result.style.cssText = 'color: red; display: flex;'
            result.textContent = 'Bad connect!'
            setTimeout(() => result.style.display = 'none', 2000)
        }


    }) 
}

 
