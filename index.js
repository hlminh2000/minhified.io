const   express = require('express')
        http = require('http')
        bodyParser = require('body-parser')
        nodemailer = require('nodemailer')

const app = express()
const server = http.createServer(app);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('client/public'))

app.use('*', (res, req, next) => {
    console.log("HIT!")
    next()
})

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/email', function(req, res){
    console.log(req.body)
    res.redirect('/')
})

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    console.log('https://landing-hlminh2000.c9users.io/')
    console.log('Example app listening at: ', 
        process.env.IP || "0.0.0.0",
        process.env.PORT || 3000)
})