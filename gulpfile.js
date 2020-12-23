const { series, parallel } = require('gulp');
const transpile = require('./gulp/transpile');

function clean(cb) {
    console.log('clean');
    cb();
}

function livereload(cb) {
    console.log('livereload');
    cb();
}

function minify(cb) {
    console.log('minify');
    cb();
}

function build(cb) {
    console.log('build');
    if (process.env.NODE_ENV === 'pro') {
        series(transpile, minify)();
    } else {
        series(transpile, livereload)();
    }
    cb();
}

exports.build = build;
exports.default = series(clean, build);
