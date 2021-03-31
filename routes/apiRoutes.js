const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', async (req, res) => {
  const results = await db.Workout.find();
  res.json(results);
});

router.post('/api/workouts', async (req, res) => {
  const results = await db.Workout.create(req.body);
  res.json(results);
});

router.put('/api/workouts/:id', async (req, res) => {
  const results = await db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  );
  res.json(results);
});

router.get('/api/workouts/range', async (req, res) => {
  const results = await db.Workout.find();
  res.json(results);
});

module.exports = router;
