const { series, parallel, src, dest } = require('gulp');

function clean(cb) {
    console.log('clean');
    cb();
}

function javascript(cb) {
    console.log('javascript');
    return src('app/src/*.js').pipe(dest('app/dist/'));
}

function css(cb) {
    console.log('css');
    cb();
}

function transpile(cb) {
    console.log('transpile');
    parallel(javascript, css)();
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
