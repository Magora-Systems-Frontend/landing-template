module.exports = function(gulp, options, config, wrapPipe) {
    var jade = require('gulp-jade'),
        gIf = require('gulp-if'),
        htmlmin = require('gulp-htmlmin'),
        concat = require('gulp-concat');

    return gulp.task('jade', wrapPipe(function (success, error) {

        return gulp.src(options['pages'])

            .pipe(jade({pretty: true}))
            .on('error', error)

            .pipe(gIf(config.isProduction, htmlmin({collapseWhitespace: true})))
            .on('error', error)

            .pipe(gulp.dest(config['public']));
    }));
};