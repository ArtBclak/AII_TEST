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
            host: "smtp-mail.outlook.com", 
            secureConnection: false, 
            port: 587,
            tls: {
               ciphers:'SSLv3'
            },
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS
            }
        })
        
        const mailOptuons = {
            from: `<${process.env.MAIL}>`,
            to: '0960469634kvstrt@gmail.com',
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


        
        transporter.sendMail(mailOptuons, (error, info) => {
            if (error) {
                return res.status('500').json({ message: 'Something wrong!'})
            } else {
                return res.status('200').json({ message: 'We have received your request!'})
            }
        })
        
    } catch (e) {
        res.status('500').json({ message: 'Something wrong!'}) 
    }
}) 

app.listen(PORT, ()=> console.log(`Server has been started on PORT ${PORT}`))