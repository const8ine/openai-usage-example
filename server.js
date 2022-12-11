const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    errorLogger(error, 'Express bodyParser error');
    res.sendStatus(500);
  } else {
    next();
  }
});

const base = express.Router();
app.use('/api', base);

base.get('/:q?', async (req, res) => {
  if (req.query.q === undefined || req.query.q.length === 0) {
    res.status(422).json({message: 'Required parameter is missing'});
  } else {
    const completion = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: req.query.q,
    });
    res.json({answer: completion.data.choices[0].text});
  }
})

app.listen(port, () => {
  console.log(`App is listening at: ${port}`);
});
