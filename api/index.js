const express = require("express");
const app = express();
const portNo = 5000;
const multer = require("multer");
const mongoose = require("mongoose");
const time = new Date();
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const dotenv = require("dotenv"); //to function .env file - hide imp details
const path = require("path");
const fs = require("fs");
dotenv.config();
app.use(express.json()); // parse json data
app.use("/images", express.static(path.join(__dirname, "/images")));
const date = time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();
//========= MONGO-DB Connect =================================
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,   -----  not Supported anymore
    // useFindAndModify: true  -----  not Supported anymore
  })
  .then(
    console.log(
      `Connected to MongoDB at: ${
        time.getHours() +
        ":" +
        time.getMinutes() +
        ":" +
        time.getSeconds() +
        "-" +
        date
      }`
    )
  )
  .catch((err) => console.log(err));

//====== Image STORAGE and UPLOAD ============================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${time.getTime()}` + ".jpg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.any("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//=============  API ROUTES ==================================
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/category", categoryRoute);

//=============  Listening to PORT ===========================
app.listen(portNo, () => {
  console.log(`Server started Listening at Port: ${portNo}`);
});
