const { exec } = require('child_process');
const os = require('os');

// Simple command loop
function prompt() {
    process.stdout.write(`${os.hostname()} > `);
    process.stdin.once('data', (input) => {
        const cmd = input.toString().trim();
        if (cmd === 'exit') return;
        exec(cmd, (err, stdout, stderr) => {
            console.log(stdout || stderr);
            prompt();
        });
    });
}

prompt();
