import express from 'express';
import HealthStat from '../models/HealthStat.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const stats = await HealthStat.find();
  res.json(stats);
});

router.post('/', async (req, res) => {
  const newStat = new HealthStat(req.body);
  await newStat.save();
  res.json({ message: 'Health stat added' });
});

export default router;
