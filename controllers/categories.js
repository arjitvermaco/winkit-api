
// To get all categories from database
exports.getAllCategories = (req,res)=>{
try{
    res.json({message:"Sending all categories"});
}catch(err){
    console.log(err);
}
}

exports.createNewCategory = (req,res)=>{
    try{
        res.json({message:"Creating A New Category"});
    }catch(err){
        console.log(err);
    }
}

exports.deleteCategory = (req,res)=>{
    try{
        
        res.json({message:req.params.id});
    }catch(err){
        console.log(err);
    }
}
