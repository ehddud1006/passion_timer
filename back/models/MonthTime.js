const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema(
    {
        usernickname: {
            type: String,
            required: true,
            unique: true,
        },
        time: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("MonthTime", TimeSchema);