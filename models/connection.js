const mongoose = require('mongoose');
const Rsvp = require('./Rsvp');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    topic: {type: String, required: [true, 'Topic is required']},
    prodOneLine:{type:String, required:[true,'Product One iner is required']},
    hostname: {type: String, required: [true, 'Host is required']},
    location: {type: String, required: [true, 'Location is required']},
    cost: {type: String, required: [true, 'Cost is required']},
    Significance: {type: String, required: [true, 'Significance is required']},
    details: {type: String, required: [true, 'Detail is required'], 
              minLength: [10, 'The detail should have at least 10 characters']},
    image: {type: String, required: [true, 'Image is required']},
},
{timestamps: true}
);

connectionSchema.pre('deleteOne', function(next) {
    let id = this.getQuery()['_id'];
    Rsvp.deleteMany({ connection: id}).exec();
    next();
});

module.exports = mongoose.model('Connection', connectionSchema);