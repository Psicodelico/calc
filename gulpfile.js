const { series, parallel, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del');

const { transpile } = require('./gulp/transpile');
const { browsersyncServe, livereload } = require('./gulp/reload');

async function clean(cb) {
    del(['app/mini/**', 'app/dist/**'], { force: true });
    cb();
}

function minify() {
    return src('app/dist/**/*.js').pipe(uglify()).pipe(dest('app/mini/'));
}

function build(cb) {
    if (process.env.NODE_ENV === 'dev') {
        series(transpile, browsersyncServe, livereload)();
    } else {
        series(transpile, minify)();
    }
    cb();
}

exports.clean = clean;
exports.build = build;
exports.default = series(clean, build);
