const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    
    //date object model 
    day: {
      type: Date,
      default: Date.now
    },
    
    //workout object model - KSJ
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: true
          },
          name: {
            type: String,
            trim: true,
            required: true,
            unique: false
          },
          duration: {
            type: Number,
            required: true
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
      }
    ]
  });
  
  const Workout = mongoose.model("workout", WorkoutSchema);
  
  module.exports = Workout;

