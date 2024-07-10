const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
    alpha_two_code: String,
    name: String,
    domains: [String],
    web_pages: [String],
    country: String,
    "state-province": String,
});

module.exports = mongoose.model('universities', UniversitySchema);
