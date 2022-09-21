const { model, Schema } = require('mongoose')

const newProductSchema = new Schema({
    id: {
        type: Number,
        AutoIncrement: true,
    },
    nome: {
        type: String,
        required: true,
    },
})

module.exports = model('produto', newProductSchema)