const { series, parallel, watch } = require('gulp');
const { transpile, javascript } = require('./gulp/transpile');

function clean(cb) {
    cb();
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

exports.build = build;
exports.default = series(clean, build);
