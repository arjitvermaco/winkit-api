const express = require('express');
const router = express.Router();
const categoriesController = require("../controllers/categories");


//Get Routes
router.get('/all-categories',categoriesController.getAllCategories);


//POST
router.post('/add-new-category',categoriesController.createNewCategory);

//Delete
router.delete('/category/:id',categoriesController.deleteCategory);



module.exports = router;





