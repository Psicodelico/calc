const { series, parallel } = require('gulp');
const transpile = require('./gulp/transpile');

function clean(cb) {
    cb();
}

function livereload(cb) {
    cb();
}

function minify(cb) {
    cb();
}

function build(cb) {
    if (process.env.NODE_ENV === 'pro') {
        series(transpile, minify)();
    } else {
        series(transpile, livereload)();
    }
    cb();
}

exports.build = build;
exports.default = series(clean, build);
