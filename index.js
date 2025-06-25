const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usageController = require('../controllers/usageController');
const toneController = require('../controllers/toneController');
const feedController = require('../controllers/feedController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/track-usage', usageController.trackUsage);
router.get('/report/:userId', usageController.getReport);
router.post('/tone-check', toneController.toneCheck);
router.get('/feed-info/:userId', feedController.feedInfo);

module.exports = router;

// Example: controllers/authController.js
const admin = require('../services/firebaseService');

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(200).json({ uid: userRecord.uid });
  } catch (error) {
    res.status(500).send('Signup failed');
  }
};

exports.login = (req, res) => {
  res.status(200).send('Login handled via Firebase Client SDK');
};