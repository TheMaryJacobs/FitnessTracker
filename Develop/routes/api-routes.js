const db = require("../models")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(function (workouts) {
                res.json(workouts)
            })
            .catch(function (err) {
                console.log(err)
            })
    })

    app.post("/api/workouts", function (req, res) {
        db.Workout.create({})
            .then(function (workouts) {
                res.json(workouts)
            })
            .catch(function (err) {
                console.log(err)
            })
    })


};