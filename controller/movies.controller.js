import Movie from "../models/schema.models.js";


export const MovieIndex = async(req,res)=>{
    try{
        const movie = await Movie.find()
         res.json(movie)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const MovieCreate = async(req,res)=>{
   console.log(req.body);

   const newMovie = new Movie({
    title : req.body.title,
    desc : req.body.desc
   })

   try{
    const movie = await  newMovie.save()
    return res.status(201).json(movie)
   }catch(err){
            return res.status(400).json({message:err.message});
   }
}

export const MovieUpdate = async(req,res)=>{
   
   try{
    const result = await Movie.findOneAndUpdate({_id:req.params.id},
        {
            title:req.body.title,
            desc:req.body.desc
        },
        {
            new:true
        }
    )
    res.status(200).json(result)
   }catch(err){
    res.status(405).json(err.message)
   }
}

export const MovieDelete = async(req,res)=>{
  const movieId = req.params.id

  try{
        const deletedMovie = await Movie.deleteOne({_id:movieId})
        res.status(200).json("Item deleted")
  }catch(err){
    res.status(405).json({message:err.message})
  }
}

export const MovieSearch = async(req,res)=>{
    const movie = await Movie.findById(req.params.id)
    if(movie==null){
        res.status(405).json("Item not found")
    }else{
        res.json(movie)
    }
}