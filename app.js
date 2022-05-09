const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.listen(port, ()=>{
    console.log(`hello World app listening at port:${port}`)
})
// Setting templates
app.set('view engine', 'ejs')


const user = {
    firstName: 'Terrell',
    lastName: 'McKinney'
}

// Creating routes
app.get('/', (req, res)=>{
    res.render('pages/index', {user:user})
})

const rangers = {
    red: 'Jason',
    green:'Tommy',
    blue:'Billy',
    pink:'Kimberly',
    yellow: 'Trini',
    black: 'Zack',
    white: 'Tommy'
}

app.get('/rangers', (req,res)=>{
    res.render('pages/rangers', {rangers:rangers})
})
// Dynamic Routes
app.get('/:color/ranger',( req,res,next ) =>{
    console.log("Timestamp:", Date())
    next()
}, (req,res,next)=>{
    res.render('pages/action', {ranger:req.params})
})

// Using Middleware
app.use(( req,res,next ) =>{
    console.log("Timestamp:", Date())
    next()
})

//Accessing Static Files with Middleware
app.use(express.static(path.join(__dirname, 'public')))




