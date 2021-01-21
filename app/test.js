const path = require('path');

console.log('\n// 执行命令绝对路径');
console.log(`process.cwd():\n`, process.cwd());

console.log('\n// 被执行文件所在绝对路径');
console.log(`__dirname:\n`, __dirname);

console.log('\n------------------------------');

console.log('\n// 执行命令绝对路径');
console.log(`path.resolve():\n`, path.resolve());

console.log('\n// 被执行文件所在绝对路径');
console.log(`path.resolve(__dirname):\n`, path.resolve(__dirname));

console.log('\n// 在执行命令绝对路径下追加dist文件夹');
console.log(`path.resolve('dist'):\n`, path.resolve('dist'));

console.log('\n// 在被执行文件所在绝对路径下追加dist文件');
console.log(`path.resolve(__dirname, 'dist'):\n`, path.resolve(__dirname, 'dist'));

console.log('\n// 在被执行文件所在绝对路径下追加dist文件');
console.log(`path.resolve(__dirname, 'D:\\test'):\n`, path.resolve(__dirname, 'D:\\test'));

console.log('\n// ');
console.log(`path.resolve('dist','app'):\n`, path.resolve('dist','app'));

console.log('\n// ');
console.log(`path.resolve('dist/app'):\n`, path.resolve('dist/app'));

console.log('\n------------------------------');

console.log('\n// 相对路径');
console.log(`path.join():\n`, path.join());

console.log('\n// 相对路径dist');
console.log(`path.join('dist'):\n`, path.join('dist'));

console.log('\n// 组合执行命令的绝对路劲与dist');
console.log(`path.join(process.cwd(), 'dist'):\n`, path.join(process.cwd(), 'dist'));

console.log('\n// 组合执行命令的绝对路劲与dist、app');
console.log(`path.join(process.cwd(), 'dist', 'app'):\n`, path.join(process.cwd(), 'dist', 'app'));

console.log('\n// 组合执行命令的绝对路劲与dist、app');
console.log(`path.join(__dirname, 'dist/app'):\n`, path.join(__dirname, 'dist/app'));

console.log('\n// 两个绝对路径拼接可能出现错误路径');
console.log(`path.join(__dirname, 'D:\\test')\n`, path.join(__dirname, 'D:\\test'));