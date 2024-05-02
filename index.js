const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// local imports
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')


const app = express()

//middleware
app.use(bodyParser.json())
// app.use(cors({origin: 'http://localhost:4200'}))


// for the AWS Ec2 machine public Ip where the docker image is running
app.use(cors({origin: 'http://54.173.149.183:4200'}))


// cores code should be before this 
app.use('/api/employees', employeeRoutes)


app.use(errorHandler)

connectDb()
    .then(() => {
        console.log(' db connected')
        app.listen(3000,() => console.log(' server started at 3000'))

    })
    .catch(err => console.log(err))