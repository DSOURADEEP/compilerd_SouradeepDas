
const express = require('express');
const router = express.Router();
const { respond } = require('../loader.js').helpers;
const { compilePython, runPython } = require('../languages/python');
const { compileJavaScript, runJavaScript } = require('../languages/javascript');

router.post('/compile', async (req, res) => {
    const { code, language } = req.body;
    
    try {
        let result;
        switch (language) {
            case 'python':
                result = await compilePython(code);
                break;
            case 'javascript':
                result = await compileJavaScript(code);
                break;
            case 'go':
                result = await compileGo(code);
                break;
            default:
                return respond(res, 400, { message: 'Unsupported language' });
        }
        return respond(res, 200, { result });
    } catch (error) {
        return respond(res, 500, { message: error.message });
    }
});

router.post('/run', async (req, res) => {
    const { code, language } = req.body;
    
    try {
        let result;
        switch (language) {
            case 'python':
                result = await runPython(code);
                break;
            case 'javascript':
                result = await runJavaScript(code);
                break;
            case 'ruby':
                result = await runRuby(code);
                break;
            case 'go':
                result = await runGo(code);
                break;
            case 'php':
                result = await runPHP(code);
                break;

            default:
                return respond(res, 400, { message: 'Unsupported language' });
        }
        return respond(res, 200, { result });
    } catch (error) {
        return respond(res, 500, { message: error.message });
    }
});

module.exports = router;