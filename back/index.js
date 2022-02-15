// 익스프레스
const express = require("express");
const app = express();

// dotenv .env 파일을 사용하기 위함
const dotenv = require("dotenv");
dotenv.config();
// dotenv .env 파일을 사용하기 위함

// json 파일을 보내고 받을 수 있게한다.
app.use(express.json());

// const authRoute = require("./routes/auth")
// app.use("/api/auth", authRoute)
const authRoute = require("./routes/auth");
app.use("/back/auth", authRoute);
// const postsRoute = require("./routes/posts")
// app.use("/api/posts", postsRoute)
// const categoriesRoute = require("./routes/categories")
// app.use("/api/categories", categoriesRoute)

const timeRoute = require("./routes/time");
app.use("/back/time", timeRoute);

const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/test');
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connect to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.static("build"));
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});
// const multer = require("multer")
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "images")
//     }, filename: (req, file, cb) => {
//         cb(null, req.body.name)
//     },
// })

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("File has been uploaded");
// });
// app.use("/", (req, res) => {
//     console.log("hey this is main url")
// })

// const cors = require("cors");
// const corsOptions = {
//     origin: true,
//     credentials: true
// };
// app.use(cors(corsOptions));
// const session = require("express-session");
// const path = require("path")
// app.use("/images", express.static(path.join(__dirname, "/images")))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // app.listen(5000, () => {
  console.log("Backend is running.");
});
