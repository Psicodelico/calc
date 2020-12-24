const { series, parallel, watch } = require('gulp');
const { javascript, css } = require('./transpile');
const browsersync = require('browser-sync').create();

function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: './app'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    console.log(1);
    browsersync.reload();
    cb();
}

function livereload(cb) {
    watch('app/*.html', browsersyncReload);
    watch('app/src/*.less', series(css, browsersyncReload));
    watch('app/src/*.js', series(javascript, browsersyncReload));
    cb();
}

module.exports = {
    browsersyncServe,
    browsersyncReload,
    livereload
};
