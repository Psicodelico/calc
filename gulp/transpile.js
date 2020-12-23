const { parallel, src, dest } = require('gulp');

function javascript(cb) {
    console.log('javascript');
    return src('app/src/*.js').pipe(dest('app/dist/'));
}

function css(cb) {
    console.log('css');
    cb();
}

function transpile(cb) {
    console.log('transpile');
    parallel(javascript, css)();
    cb();
}

module.exports = transpile;
