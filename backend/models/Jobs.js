const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Jobschema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
});

module.exports = Jobs = mongoose.model("jobs", Jobschema);