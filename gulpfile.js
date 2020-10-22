const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const cooncat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;


function browsersync () {
    browserSync.init({
        server: { baseDir: 'src/' },
        notify: false,
        online: true
    })
}

function scripts () {
    return src ([
        'src/js/script.js',
    ])
    .pipe(contact('script.min.js'))
    .pipe(uglify())
    .pipe(dist('js/js/'))
    .pipe(browserSync.stream())
}

exports.browsersync = browsersync;

exports.scripts = scripts;