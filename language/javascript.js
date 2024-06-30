const { exec } = require('child_process');

function compileJavaScript(code) {
    return new Promise((resolve, reject) => {
        // JavaScript is an interpreted language, so compilation is not required
        resolve('No compilation needed for JavaScript');
    });
}

function runJavaScript(code) {
    return new Promise((resolve, reject) => {
        const process = exec('node', (error, stdout, stderr) => {
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

module.exports = { compileJavaScript, runJavaScript };
