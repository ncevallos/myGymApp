const db = require("../models");

// Defining methods for the classController
module.exports = {
  findAll: function(req, res) {
    console.log("Finding all");
    db.ClassSchedule
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMonday: function(req, res) {
    db.ClassSchedule
      .find( { $text: { $search: "Monday" } })
      .sort({ timeOfDay: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTuesday: function(req, res) {
    db.ClassSchedule
      .find( { $text: { $search: "Tuesday" } })
      .sort({ timeOfDay: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWed: function(req, res) {
    db.ClassSchedule
      .find( { $text: { $search: "Wednesday" } })
      .sort({ timeOfDay: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findThurs: function(req, res) {
    db.ClassSchedule
      .find( { $text: { $search: "Thursday" } })
      .sort({ timeOfDay: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findFri: function(req, res) {
    db.ClassSchedule
      .find( { $text: { $search: "Friday" } })
      .sort({ timeOfDay: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWkend: function(req, res) {
    db.ClassSchedule
      .find( { $text: { $search: "Saturday" || "Sunday"} })
      .sort({ timeOfDay: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.ClassSchedule
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.ClassSchedule
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.ClassSchedule
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.ClassSchedule
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
