const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const purgecss = require('gulp-purgecss') /** Specific class:  This will generate only which classes is used. */

function buildStyles() {
    return src('shinobi/**/*.scss')
        .pipe(sass())
        // .pipe(purgecss({ content: ['*.html'] })) /** Specific class pipe code. */
        .pipe(dest('css'));
}

function watchTask() {
    watch([
        'shinobi/**/*.scss'
        // , '*.html' /** Specific classes checking which classes are used. */
    ], buildStyles);
}

exports.default = series(buildStyles, watchTask);