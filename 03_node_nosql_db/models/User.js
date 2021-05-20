const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'GUEST',
        enum: ['GUEST', 'ADMIN'],
    },
    profile_pic: {
        type: String,
        default: 'https://ca.slack-edge.com/TE1NJDVGU-UFLF10755-78d87551fb96-512'
    },
})

/*
El modelo es el objeto que nos permite intearctuar con una coleccion dada.
En caso del modelo 'User' nos permitira interactuar con la coleccion 'Users'
*/
const User = mongoose.model('User', UserSchema);

module.exports = User;