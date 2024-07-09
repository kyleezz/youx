const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
    name: String,
    country: String,
    web_pages: [String],
    domains: [String]
});

module.exports = mongoose.model('University', UniversitySchema);
