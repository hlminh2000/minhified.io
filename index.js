const   express = require('express')
        http = require('http')
        bodyParser = require('body-parser')
        nodemailer = require('nodemailer')
        logger = require("./services/logger.js")

const app = express()
const server = http.createServer(app);

app.use('*', logger.endPointLog)

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/", express.static('client/landing/public'))



app.post('/email', function(req, res){
    res.redirect('/')
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