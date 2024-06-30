const { exec } = require('child_process');

function compilePython(code) {
    return new Promise((resolve, reject) => {
        // Python is an interpreted language, so compilation is not required
        resolve('No compilation needed for Python');
    });
}

function runPython(code) {
    return new Promise((resolve, reject) => {
        const process = exec('python3', (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });

        process.stdin.write(code);
        process.stdin.end();
    });
}

module.exports = { compilePython, runPython };
