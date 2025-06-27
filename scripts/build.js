const { execSync } = require('child_process');
execSync('tsc --emitDeclarationOnly', { stdio: 'inherit' });
execSync('babel src --out-dir dist --extensions ".ts,.tsx"', { stdio: 'inherit' });
