const mongoose = require("mongoose");

function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}

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
        createdAt: {
            type: Date,
            default: getCurrentDate(),
        },
        updatedAt: {
            type: Date,
            default: getCurrentDate(),
        },
    },
    // { timestamps: true }
);

module.exports = mongoose.model("Time", TimeSchema);