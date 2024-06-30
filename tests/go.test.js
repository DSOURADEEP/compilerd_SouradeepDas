const fs = require('fs');
const { compileGo, runGo } = require('../language/go');

describe('Go Compiler', () => {
    const filePath = 'language/temp.go';

    afterEach(() => {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        const binaryPath = filePath.replace('.go', '');
        if (fs.existsSync(binaryPath)) {
            fs.unlinkSync(binaryPath);
        }
    });

    test('should compile Go code', async () => {
        const code = 'package main\nimport "fmt"\nfunc main() {\n fmt.Println("Hello, Go!")\n}';
        fs.writeFileSync(filePath, code);

        try {
            const result = await compileGo(filePath);
            expect(result).toBeTruthy();
        } catch (error) {
            console.error('Go Compile Error:', error);
            throw error;
        }
    });

    test('should run Go code', async () => {
        const code = 'package main\nimport "fmt"\nfunc main() {\n fmt.Println("Hello, Go!")\n}';
        fs.writeFileSync(filePath, code);

        try {
            await compileGo(filePath);
            const result = await runGo(filePath);
            expect(result.trim()).toBe('Hello, Go!');
        } catch (error) {
            console.error('Go Run Error:', error);
            throw error;
        }
    });
});
