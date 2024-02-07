const fs = require('node:fs');
const path = require('node:path');

const temporary = fs.readFileSync(path.join(__dirname, './dist/index.js'), { encoding: 'utf-8' });
fs.writeFileSync(path.join(__dirname, './dist/index.js'), 'var process = {env:{}};' + temporary, {
	encoding: 'utf-8'
});
