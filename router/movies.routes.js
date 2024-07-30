import express from 'express'

const router = express.Router()

//CURd functionalities
 
// R -for reading
router.get('/movies',(req,res)=>{
    res.send("Reading  Movies")
})

// C - for creating
router.post('/movies',(req,res)=>{
    res.send("Create Movies")
})

// U - for updating
router.put('/movies/:id',(req,res)=>{
    res.send("Ubdate Movies")
})

// D - for deleting
router.delete('/movies/:id',(req,res)=>{
    res.send("Delete Movies")
})
export default router