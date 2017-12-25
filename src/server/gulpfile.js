var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src('public/scss/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['> 0%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/dist/entry/css'));
});


gulp.task('watch', function () {
    gulp.watch('public/scss/*.scss', ['scss']);
});

gulp.task('default', ['scss','watch']);