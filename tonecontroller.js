const openai = require('../services/aiService');

exports.toneCheck = async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Analyze the following text for toxicity: ${message}`,
      max_tokens: 60,
    });
    res.status(200).json({ analysis: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).send('Error analyzing message');
  }
};