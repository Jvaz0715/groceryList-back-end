var express = require('express');
var router = express.Router();

const {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    sortGroceryByPurchased,
    sortGroceryByDate,
} = require("./Controller/groceryListController");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(true);
})

// Set up all the functionalities in the Controller for these Routes:

// * /get-all-groceries
router.get("/get-all-groceries", getAllGroceries);

// * /create-grocery
router.post("/create-grocery", createGrocery);

// * /update-grocery-by-id
router.put("/update-grocery-by-id/:id", updateGrocery);

// * /delete-grocery-by-id

router.delete("/delete-grocery-by-id/:id", deleteGrocery)

// get groceries that are purchased
router.get("/get-groceries-by-purchased", sortGroceryByPurchased)

// get groceries by date added
router.get("/get-groceries-by-sort", sortGroceryByDate)

module.exports = router;