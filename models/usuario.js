const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);