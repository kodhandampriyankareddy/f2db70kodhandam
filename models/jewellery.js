const mongoose = require("mongoose")
const jewellerySchema = mongoose.Schema({
    jewellery_name: String,
    jewellery_size: Number,
    jewellery_type: String
})

module.exports = mongoose.model("jewellery",jewellerySchema) 