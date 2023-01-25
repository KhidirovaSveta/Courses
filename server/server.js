const express = require('express')
const app = express()
const port = 8080

const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(cors())


const {Schema} = mongoose;

const coursesSchema = new Schema ({
    img1: {type: String, require: true},
    title: {type: String, require: true},
    tags: {type: String, require: true},
    img2: {type: String, require: true},
    name: {type: String, require: true},
    price: {type: Number, require: true},

},
{timestamp: true}
)

const Courses = mongoose.model("courses", coursesSchema)

app.get('/', (req, res) => {
    Courses.find({}, (error, docs) => {
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message: error})
        }
    })
})

app.post("/", (req, res) => {
    let newCourse = new Courses ({
        img1: req.body.img1,
        title:  req.body.title,
        tags:  req.body.tags,
        img2:  req.body.img2,
        name:  req.body.name,
        price:  req.body.price,
    })
    newCourse.save()
    res.send("succsess")
})

mongoose.set('strictQuery', false)

mongoose.connect(`mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/?retryWrites=true&w=majority`, (error) =>{
    if(!error){
        app.listen(port, () => {
          console.log(`Example app listening on port http://localhost:${port}`)
        })
    }
})