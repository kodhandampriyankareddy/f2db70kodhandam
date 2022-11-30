const mongoose = require("mongoose")
const jewellerySchema = mongoose.Schema({
    jewellery_name: {type: String,required: [true, 'name of the jewellery cannot be empty']},
    jewellery_size: {type: Number,required: [true, 'size of the jewellery cannot be empty']},
    jewellery_type: {type: String,required: [true, 'type of the jewellery cannot be empty']}
})

module.exports = mongoose.model("jewellery",jewellerySchema)