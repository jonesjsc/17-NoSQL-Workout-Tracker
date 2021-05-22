// const Workout = require("../models");
// const mongoose = require("mongoose");
// const express = require("express");
// const router = express.Router();

const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// router.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then((dbWorkouts) => {
//       res.json(dbWorkouts);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workouts/range", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then((dbWorkouts) => {
//       res.json(dbWorkouts);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then((dbWorkouts) => {
//       res.json(dbWorkouts);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log("Smashed");
    })
    .catch((err) => {
      console.log("failed");
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
