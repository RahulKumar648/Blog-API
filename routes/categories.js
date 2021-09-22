const router = require("express").Router();
const Category = require("../models/Category");

// create categories
 router.post("/",async (req, res)=>{
     const newCategory = new Category(req.body);
     try {
         const saveCategory =await newCategory.save();
         res.status(200).json(saveCategory);
     } catch (error) {
         res.status(500).json(error);
     }
 });

//  get categories
router.get("/",async (req, res)=>{
    try {
        const Cate =await Category.find();
        res.status(200).json(Cate);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;
