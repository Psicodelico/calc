const { series, parallel, src, dest } = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');

// stream
function javascript() {
    return src('app/src/**/*.js')
        .pipe(
            babel({
                presets: ['@babel/preset-env']
            })
        )
        .pipe(dest('app/dist/'));
}

// stream
function css() {
    return src('app/src/**/*.less').pipe(less()).pipe(dest('app/dist/'));
}

function transpile(cb) {
    parallel(javascript, css)();
    cb();
}

module.exports = {
    javascript,
    css,
    transpile
};
