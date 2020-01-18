var gulp = require('gulp');
const fs = require('fs');
var inject = require('gulp-inject');
var replace = require('gulp-replace');

gulp.task('replace', function () {
    var target = gulp.src(['./*.html']);

    var sources = gulp.src(['./*.css'])

    return target
        .pipe(replace(/<!-- inject:css -->/, (s, filename) => {
            console.log(filename)
            var style = fs.readFileSync(__dirname + '/styles.css', 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
        .pipe(replace(/<!-- inject:footer -->/, (s, filename) => {
            var html = fs.readFileSync(__dirname + '/footer.html', 'utf8');
            return html;
        }))
        .pipe(gulp.dest('./lib'))
});

gulp.task('copy', function () {
    var target = gulp.src(['./index.js', './index.d.ts']);

    return target
        .pipe(gulp.dest('./lib'))
});


gulp.task('default', gulp.parallel('replace', 'copy'));