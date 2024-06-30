const fs = require('fs');
const { exec } = require('child_process');

function compileGo(filePath) {
    return new Promise((resolve, reject) => {
        exec(`go build -o ${filePath.replace('.go', '')} ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

function runGo(filePath) {
    return new Promise((resolve, reject) => {
        const binaryPath = filePath.replace('.go', '');
        exec(`${binaryPath}`, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = { compileGo, runGo };
