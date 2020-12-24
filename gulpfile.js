const { series, parallel } = require('gulp');
const del = require('del');

const { minifyJS, minifyCSS } = require('./gulp/uglify');
const { transpile } = require('./gulp/transpile');
const { browsersyncServe, livereload } = require('./gulp/reload');

async function clean(cb) {
    del(['app/mini/**', 'app/dist/**'], { force: true });
    cb();
}

function minify(cb) {
    console.log(1);
    parallel(minifyJS, minifyCSS)();
    cb();
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
