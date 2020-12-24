const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

function minifyJS() {
    return src('app/dist/**/*.js').pipe(uglify()).pipe(dest('app/mini/'));
}

function minifyCSS() {
    return src('app/dist/**/*.css').pipe(cleanCSS()).pipe(dest('app/mini/'));
}

module.exports = {
    minifyJS,
    minifyCSS
};
