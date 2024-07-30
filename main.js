import express from 'express'

const app = express()
const PORT = 5414


app.get ('/', (req,res) =>{
 res.json({ msg: "Hello students!" })
})


app.listen(PORT,()=>{
    console.log(`The server is running in http://localhost:${PORT}`)
})