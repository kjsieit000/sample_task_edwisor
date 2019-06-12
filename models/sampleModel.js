// {
//     "SampleKey1": {
//         "type": "String",
//             "canBenull": false
//     },
//     "SamleKeyTwo": {
//         "type": "String",
//             "enum": [
//                 “Value1”,
//                 “Value2”,
//                 “Value3”
//             ]
//     }
// }
// Example Input Object:
// { SampleKey1: ”Hey”, SampleKeyTwo: ”Value2” }


const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')

const sampleSchema = new Schema({
    sampleKey1: {
        type: String,
        required: true,
        trim: true,
        timestmaps: true
    },
    sampleKey2: {
        type: String,
        enum: ['value1', 'value2', 'value3'],
        timestmaps: true
    },

    sampleEmail: {
        type: String,
        unique: [true, 'email already exists'],
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    },

    sampleAge: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must a positive numnber')
            }
        }
    }
})




module.exports = mongoose.model('Sample1', sampleSchema)