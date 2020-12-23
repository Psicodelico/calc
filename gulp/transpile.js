const { parallel, src, dest } = require('gulp');
const babel = require('gulp-babel');

function javascript(cb) {
    return src('app/src/*.js')
        .pipe(
            babel({
                presets: ['@babel/preset-env']
            })
        )
        .pipe(dest('app/dist/'));
}

function css(cb) {
    cb();
}

function transpile(cb) {
    parallel(javascript, css)();
    cb();
}

module.exports = transpile;
