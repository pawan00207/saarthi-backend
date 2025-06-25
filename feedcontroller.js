exports.feedInfo = async (req, res) => {
  const userId = req.params.userId;
  try {
    const reason = 'Feed customized based on your activity patterns';
    res.status(200).json({ reason });
  } catch (error) {
    res.status(500).send('Error fetching feed info');
  }
};