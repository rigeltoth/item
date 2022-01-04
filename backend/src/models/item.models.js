const { Schema, model } = require("mongoose");

const intemSchema = new Schema({
    name: {type: String, requiere: true},
    brand: {type: String, requiere: true},
    price: {type: Number, requiere: true},
    cant: {type: Number, requiere: true}
    },
    {
        timestamps: true,
        versionKey: false
    })

    module.exports = model('Item', intemSchema)