const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({

    grocery: {
        type: String,
    },
    isPurchased: {
        type: Boolean,
        default: false,
    },
    dateAdded: {
        type: Date,
        default: () => Date.now(), //default with called function makes sure each grocery gets its on time added
    },
});

module.exports = mongoose.model("grocery", grocerySchema);