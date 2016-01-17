module.exports = function(gulp, options, config, wrapPipe) {
    var stylus = require('gulp-stylus'),
        gIf = require('gulp-if'),
        minify = require('gulp-minify-css'),
        autoprefixer = require('gulp-autoprefixer'),
        concat = require('gulp-concat');

    return gulp.task('stylus', wrapPipe(function (success, error) {

        return gulp.src(options['main'])

            .pipe(stylus())
            .on('error', error)

            .pipe(autoprefixer({
                browsers: ['ie >= 10',
                    'ie_mob >= 10',
                    'ff >= 29',
                    'chrome >= 34',
                    'safari >= 6',
                    'opera >= 23',
                    'ios >= 7',
                    'android >= 4.4',
                    'bb >= 10'],
                cascade: true
            }))

            .pipe(gIf(config.isProduction, minify()))
            .on('error', error)

            .pipe(concat(options['dst']))
            .on('error', error)

            .pipe(gulp.dest(config['public']));
    }));
};