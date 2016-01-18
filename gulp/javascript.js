module.exports = function(gulp, options, config, wrapPipe) {
    var gIf = require('gulp-if'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat')

    return gulp.task('javascript', wrapPipe(function (success, error) {

        return gulp.src(options['src'])
            .pipe(concat(options['dst']))
            .on('error', error)

            .pipe(gIf(config.isProduction, uglify()))
            .on('error', error)

            .pipe(gulp.dest(config['public']));
    }));
};