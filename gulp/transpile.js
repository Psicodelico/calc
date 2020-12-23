const { parallel, src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function javascript(cb) {
    return src('app/src/*.js')
        .pipe(
            babel({
                presets: ['@babel/preset-env']
            })
        )
        .pipe(uglify())
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
