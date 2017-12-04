const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classScheduleSchema = new Schema({
  nameOfClass: { type: String, required: true },
  teacher: { type: String, required: true },
  dayOfWeek: { type: String, required: true },
  timeOfDay: { type: String, required: true }
});

const ClassSchedule = mongoose.model("ClassSchedule", classScheduleSchema);

module.exports = ClassSchedule;
