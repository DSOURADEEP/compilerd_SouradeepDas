const { compilePython, runPython } = require('../language/python');

describe('Python Compiler', () => {
    test('should compile Python code', async () => {
        const code = 'print("Hello, Python!")';
        const result = await compilePython(code);
        expect(result).toBe('No compilation needed for Python');
    });

    test('should run Python code', async () => {
        const code = 'print("Hello, Python!")';
        const result = await runPython(code);
        expect(result.trim()).toBe('Hello, Python!');
    });
});
