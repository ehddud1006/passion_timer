const router = require("express").Router();
const User = require("../models/User");
const Time = require("../models/Time");
const WeekTime = require("../models/WeekTime");
const TotalTime = require("../models/TotalTime");
const bcrypt = require("bcrypt");

function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var today = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();
  return new Date(
    Date.UTC(year, month, today, hours, minutes, seconds, milliseconds)
  );
}
//changed all 'username' => 'usernickname'
router.post("/", async (req, res) => {
  var username = req.body.username;
  // console.log(req.body);
  // console.log("plz");
  try {
    var time;
    if (usernickname) {
      time = await Time.find({ usernickname });
    }
    res.status(200).json(time);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/week", async (req, res) => {
  var username = req.body.username;
  // console.log(req.body);
  // console.log("plz");
  try {
    var weektime;
    if (usernickname) {
      weektime = await WeekTime.find({ usernickname });
    }
    res.status(200).json(weektime);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/total", async (req, res) => {

  var username = req.body.username;
  // console.log(req.body);
  // console.log("total");
  try {
    var totaltime;
    if (usernickname) {
      totaltime = await TotalTime.find({ usernickname });
    }
    res.status(200).json(totaltime);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/submit", async (req, res) => {
  try {
    // console.log(req.body.id)
    // console.log(getCurrentDate())
    // console.log(new Date())
    const time = await Time.findById(req.body.id);
    if (time.usernickname === req.body.usernickname) {
      try {
        const updatedTime = await Time.findByIdAndUpdate(
          req.body.id,
          {
            $set: { time: req.body.time },
          },
          { new: true }
        );
        res.status(200).json(updatedTime);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/submit2", async (req, res) => {
  try {
    // console.log("dad" + req.body.id);
    // console.log(getCurrentDate())
    // console.log(new Date())
    const weektime = await WeekTime.findById(req.body.id);

    // console.log(weektime);
    if (weektime.username === req.body.username) {
      try {
        goodH = weektime.hour + req.body.hour;
        goodM = weektime.minute + req.body.minute;
        goodS = weektime.second + req.body.second;

        if (goodM >= 60) {
          let a = parseInt(goodM / 60);
          goodH += a;
          goodM -= a * 60;
        }

        if (goodS >= 60) {
          let a = parseInt(goodS / 60);
          goodM += a;
          goodS -= a * 60;
        }
        const updatedWeekTime = await WeekTime.findByIdAndUpdate(
          req.body.id,
          {
            $set: {
              hour: goodH,
              minute: goodM,
              second: goodS,
            },
          },
          { new: true }
        );
        res.status(200).json(updatedWeekTime);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/submit3", async (req, res) => {
  try {
    console.log(req.body.hours);
    console.log(req.body.minute);
    console.log(req.body.second);

    // console.log("total" + req.body.id);
    // console.log("total" + req.body.second);
    // console.log(getCurrentDate())
    // console.log(new Date())
    const totaltime = await TotalTime.findById(req.body.id);
    console.log(
      `totaltime.second: ${totaltime.second} req.body.second: ${req.body.second}`
    );
    if (totaltime.username === req.body.username) {
      try {
        goodH = totaltime.hour + req.body.hour;
        goodM = totaltime.minute + req.body.minute;
        goodS = totaltime.second + req.body.second;

        if (goodM >= 60) {
          let a = parseInt(goodM / 60);
          goodH += a;
          goodM -= a * 60;
        }

        if (goodS >= 60) {
          let a = parseInt(goodS / 60);
          goodM += a;
          goodS -= a * 60;
        }
        const updatedtotalTime = await TotalTime.findByIdAndUpdate(
          req.body.id,
          {
            $set: {
              hour: goodH,
              minute: goodM,
              second: goodS,
            },
          },
          { new: true }
        );
        res.status(200).json(updatedtotalTime);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    // console.log("www");
    let posts;
    posts = await Time.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/total", async (req, res) => {
  try {
    // console.log("DADADADAVVVV");
    let posts;
    posts = await TotalTime.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
