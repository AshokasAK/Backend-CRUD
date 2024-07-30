

export const MovieIndex = (req,res)=>{
    res.send("Reading  Movies")
}

export const MovieCreate = (req,res)=>{
   console.log(req.body);
   return res.json(req.body)
}

export const MovieUpdate = (req,res)=>{
    res.send("Update Movies")
}

export const MovieDelete = (req,res)=>{
    res.send("Delete Movies")
}