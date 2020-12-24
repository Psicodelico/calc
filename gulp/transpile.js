const { series, parallel, src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function uglifyJs() {
    return src('app/dist/*.js').pipe(uglify()).pipe(dest('app/mini/'));
}
function es2js() {
    return src('app/src/*.js')
        .pipe(
            babel({
                presets: ['@babel/preset-env']
            })
        )
        .pipe(dest('app/dist/'));
}

async function javascript(cb) {
    series(es2js, uglifyJs)();
}

function css(cb) {
    cb();
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
