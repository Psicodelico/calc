const { series } = require('gulp');

function clean(cb) {
    console.log('clean');
    cb();
}

function minify(cb) {
    console.log('minify');
    cb();
}

function transpile(cb) {
    console.log('transpile');
    cb();
}

function livereload(cb) {
    console.log('livereload');
    cb();
}

function build(cb) {
    console.log('build');
    if (process.env.NODE_ENV === 'production') {
        series(transpile, minify)();
    } else {
        series(transpile, livereload)();
    }
    cb();
}

exports.build = build;
exports.default = series(clean, build);
