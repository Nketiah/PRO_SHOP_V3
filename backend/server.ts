import express from 'express'
import "dotenv/config"
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import usersRoutes from './routes/usersRoutes'

//Connect to DB here

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Routes
app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/v1/auth', usersRoutes)

const PORT = process.env.PORT || 9000
app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))