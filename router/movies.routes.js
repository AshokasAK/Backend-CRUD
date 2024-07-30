import express from 'express'
import { 
    MovieCreate, 
    MovieDelete, 
    MovieIndex, 
    MovieUpdate } from '../controller/movies.controller'

const router = express.Router()

//CURd functionalities
 
// R -for reading
router.get('/',MovieIndex)

// C - for creating
router.post('/',MovieCreate)

// U - for updating
router.put('/:id',MovieUpdate)

// D - for deleting
router.delete('/:id',MovieDelete)
export default router