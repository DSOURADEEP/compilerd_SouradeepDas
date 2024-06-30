const { compileJavaScript, runJavaScript } = require('../language/javascript');

describe('JavaScript Compiler', () => {
    test('should compile JavaScript code', async () => {
        const code = 'console.log("Hello, JavaScript!");';
        const result = await compileJavaScript(code);
        expect(result).toBe('No compilation needed for JavaScript');
    });

    test('should run JavaScript code', async () => {
        const code = 'console.log("Hello, JavaScript!");';
        const result = await runJavaScript(code);
        expect(result.trim()).toBe('Hello, JavaScript!');
    });
});
