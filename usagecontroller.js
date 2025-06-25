const admin = require('../services/firebaseService');

exports.trackUsage = async (req, res) => {
  const { userId, usageData } = req.body;
  try {
    await admin.firestore().collection('usageReports').doc(userId).set({ usageData }, { merge: true });
    res.status(200).send('Usage data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving usage data');
  }
};

exports.getReport = async (req, res) => {
  const userId = req.params.userId;
  try {
    const doc = await admin.firestore().collection('usageReports').doc(userId).get();
    if (doc.exists) res.status(200).json(doc.data());
    else res.status(404).send('Report not found');
  } catch (error) {
    res.status(500).send('Error fetching report');
  }
};