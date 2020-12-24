const { series, parallel, watch } = require('gulp');
const { javascript, css } = require('./transpile');
const browsersync = require('browser-sync').create();

function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

function livereload(cb) {
    watch('*.html', browsersyncReload);
    watch('app/src/*.less', series(css, browsersyncReload));
    watch('app/src/*.js', series(javascript, browsersyncReload));
    cb();
}

module.exports = {
    browsersyncServe,
    browsersyncReload,
    livereload
};
