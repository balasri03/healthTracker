import mongoose from 'mongoose';

const healthStatSchema = new mongoose.Schema({
  date: String,
  calories: Number,
  sleep: Number,
  workouts: Number
});

const HealthStat = mongoose.model('HealthStat', healthStatSchema);
export default HealthStat;
