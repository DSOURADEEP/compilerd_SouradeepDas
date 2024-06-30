const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { compileJavaScript, runJavaScript } = require('../language/javascript');
const { compilePython, runPython } = require('../language/python');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/compile', async (req, res) => {
  const { code, language } = req.body;
  let result;

  try {
    switch (language) {
      case 'javascript':
        result = await runJavaScript(code);
        break;
      case 'python':
        result = await runPython(code);
        break;
      default:
        throw new Error('Unsupported language');
    }
    res.json({ output: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
