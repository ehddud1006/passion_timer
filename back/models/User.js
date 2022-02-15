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

// JSON.stringify(getCurrentDate())
//기존에 timeStamp를 사용했지만 한국시간이 아니라서 오류가 발생
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: false, //본명 겹치는 경우
            notNull: true,
            notEmpty: true,
        },
        nickname: {
            type: String,
            required: true,
            unique: true, //닉네임 중복 비허용
            notNull: true,
            notEmpty: true,
        },
        password: {
            type: String,
            required: true,
            notNull: true,
            notEmpty: true,  //not null, not empty 추가
        },
        // profilePic: {
        //     type: String,
        //     default: "",
        // },
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

module.exports = mongoose.model("User", UserSchema);