const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    studentid: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
    yearlevel: { type: String, required: true }

});

student.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', student);