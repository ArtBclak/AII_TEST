require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 80

app.use('/', express.static(path.join(__dirname, '../client')))
app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'index.html'))

})

app.post('/api/form/', (req, res) => {
    try {
        let data = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS
            }
        })
        
        const mailOptuons = {
            from: 'Waterlip Client',
            to: 'eglite.ieva@gmail.com',
            subject: `Message from ${data.mail}!`,

            html: `
                <h1>Client:</h1>
                <div style="border: 1px solid #000; padding: 0 2rem;">
                    <p>Name: ${data.name}</p>
                    <p>Last Name: ${data.lastname}</p>
                    <p>Mail: ${data.mail}</p>
                    <p>Phone: ${data.phone}</p>
                    <p>Message: ${data.message}</p>
                </div>
            `
        }

        console.log('sdcsdcsdcsdcsdcsdc+____________________',data.mail)
        
        transporter.sendMail(mailOptuons, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log(info)
            }
        })

        res.status('200').json({ message: 'We have received your request!'})
        
    } catch (e) {
        res.status('500').json({ message: 'Something wrong!'})
        
    }
}) 

app.listen(PORT, ()=> console.log(`Server has been started on PORT ${PORT}`))