const { parallel, src, dest } = require('gulp');

function javascript(cb) {
    return src('app/src/*.js').pipe(dest('app/dist/'));
}

function css(cb) {
    cb();
}

function transpile(cb) {
    parallel(javascript, css)();
    cb();
}

module.exports = transpile;
