const fs = require('fs');
const { compileJavaScript, runJavaScript } = require('../language/javascript');
const { compilePython, runPython } = require('../language/python');

describe('Compiler Tests', () => {
    
    describe('Python Compiler', () => {
        test('should compile Python code', async () => {
            try {
                const code = 'print("Hello, Python!")';
                const result = await compilePython(code);
                expect(result).toBeTruthy();
            } catch (error) {
                console.error('Python Compile Error:', CircularJSON.stringify(error));
                throw error;
            }
        });

        test('should run Python code', async () => {
            try {
                const code = 'print("Hello, Python!")';
                const result = await runPython(code);
                expect(result.trim()).toBe('Hello, Python!');
            } catch (error) {
                console.error('Python Run Error:', CircularJSON.stringify(error));
                throw error;
            }
        });
    });
    describe('JavaScript Compiler', () => {
        test('should compile JavaScript code', async () => {
            try {
                const code = 'console.log("Hello, JavaScript!")';
                const result = await compileJavaScript(code);
                expect(result).toBeTruthy();
            } catch (error) {
                console.error('JavaScript Compile Error:', CircularJSON.stringify(error));
                throw error;
            }
        });

        test('should run JavaScript code', async () => {
            try {
                const code = 'console.log("Hello, JavaScript!")';
                const result = await runJavaScript(code);
                expect(result.trim()).toBe('Hello, JavaScript!');
            } catch (error) {
                console.error('JavaScript Run Error:', CircularJSON.stringify(error));
                throw error;
            }
        });
    });
});
