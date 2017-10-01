const   express = require('express')
        http = require('http')
        bodyParser = require('body-parser')
        nodemailer = require('nodemailer')
        logger = require("./services/logger.js")
        nodemailer = require('nodemailer')
        EMAIL_CREDENTIAL = require("./config.secret.json")
        
const transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'server115.web-hosting.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: account.user, // generated ethereal user
        pass: account.pass  // generated ethereal password
    }
    auth: {
        user: EMAIL_CREDENTIAL.email,
        pass: EMAIL_CREDENTIAL.password,
    }
})

const app = express()
const server = http.createServer(app);

app.use('*', logger.endPointLog)

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", express.static('client/landing/public'))
app.use("/brain_scratch", express.static('client/brain_scratch'))



app.post('/email', function(req, res){
    var mailOptions = {
        from: EMAIL_CREDENTIAL.email,
        to: req.body.email,
        subject: '[minhified.io] from ' + req.body.name,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.redirect('/')
        } else {
            console.log('Email sent: ' + info.response)
            res.redirect('/')
        }
    });
})

app.get('/yo', (req, res) => {
    res.send("as;gsdfb")
})


server.listen(process.env.PORT || 50000, process.env.IP || "0.0.0.0", function () {
    console.log('https://landing-hlminh2000.c9users.io/')
    console.log('Example app listening at: ', 
        process.env.IP || "0.0.0.0",
        process.env.PORT || 50000
    )
})