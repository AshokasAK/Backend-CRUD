import express from 'express'
import moviesRoute from './router/movies.routes.js'
import connectDB from './lib/db.js'

const app = express()
const PORT = 5173

connectDB();


app.get ('/', (req,res) =>{
 res.send("Hello students!!" )
})


app.use('/movies',moviesRoute)



app.listen(PORT,()=>{
    console.log(`The server is running in http://localhost:${PORT}`)
})