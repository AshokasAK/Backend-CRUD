import express from 'express'
import { 
    MovieCreate, 
    MovieDelete, 
    MovieIndex, 
    MovieSearch, 
    MovieUpdate } from '../controller/movies.controller.js'

const router = express.Router()

//CURd functionalities
 
// R -for reading
router.get('/',MovieIndex)
router.get('/:id',MovieSearch)

// C - for creating
router.post('/',MovieCreate)

// U - for updating
router.put('/:id',MovieUpdate)
// router.put('/:id',MovieSearch)

// D - for deleting
router.delete('/:id',MovieDelete)
export default router