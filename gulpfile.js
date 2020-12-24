const { series, parallel, watch } = require('gulp');
const { transpile, javascript } = require('./gulp/transpile');
const del = require('del');

async function clean() {
    del(['app/mini/', 'app/dist/'], { force: true });
}

function livereload(cb) {
    watch('app/src/*.js', javascript);
    cb();
}

function minify(cb) {
    cb();
}

function build(cb) {
    if (process.env.NODE_ENV === 'dev') {
        series(transpile, livereload)();
    } else {
        series(transpile, minify)();
    }
    cb();
}

exports.clean = clean;
exports.build = build;
exports.default = series(clean, build);
