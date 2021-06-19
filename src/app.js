const express = require('express')
const path= require('path')
const hbs = require('hbs')
const app = express()
// port for on line process.env.PORT but if on local it is 3000
const port = process.env.PORT || 3000  
const staticpath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs')
app.set ('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticpath))

app.get('',(req,res) => {
  res.render('index')
})

app.get('/about',(req,res)=> {
    res.render ("about")
})

app.get('/weather',(req,res)=> {
    res.render ("weather")
})

app.get('*',(req,res)=> {
    res.render ("404err", {
        errMsg:'Oops! Page not Found'
    })
})

app.listen(port,()=> {
 console.log(`listening to the port ${port}`)
})

