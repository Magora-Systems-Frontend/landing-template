module.exports = function(gulp, options, config, wrapPipe) {
    var gIf = require('gulp-if'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint');

    return gulp.task('javascript', wrapPipe(function (success, error) {

        return gulp.src(options['src'])
            .pipe(jshint())
            .pipe(jshint.reporter('fail'))

            .pipe(concat(options['dst']))
            .on('error', errors)

            .pipe(gIf(config.isProduction, uglify()))
            .on('error', errors)

            .pipe(gulp.dest(config['public']));
    }));
};