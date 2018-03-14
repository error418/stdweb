var gulp = require('gulp')
var concat = require('gulp-concat')
var sass = require('gulp-sass')

var sassSrc = ['src/**/*.scss']

var targetDir = './dist'

gulp.task('build', function() {
	return gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('stdweb.css'))
        .pipe(gulp.dest(targetDir))
})

gulp.task('watch', ['default'], function () {
	return gulp.watch(sassSrc, ['build'])
})

gulp.task('default', ['build'])

