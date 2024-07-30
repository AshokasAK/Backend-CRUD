import express from 'express'

const app = express()
const PORT = 5414


app.get ('/', (req,res) =>{
 res.json({ msg: "Hello students!" })
})

//CURd functionalities

// R -for reading
app.get('/movies',()=>{

})

// C - for creating
app.post('/movies',()=>{

})

// U - for updating
app.put('/movies/:id',()=>{

})

// D - for deleting
app.delete('/movies/:id',()=>{

})


app.listen(PORT,()=>{
    console.log(`The server is running in http://localhost:${PORT}`)
})