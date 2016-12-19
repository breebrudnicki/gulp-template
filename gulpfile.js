'use strict';

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var cssnano    = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gutil      = require('gulp-util');

// Gulp Tasks
gulp.task('build-css', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('build-js', function() {
  return gulp.src('./src/javascript/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/js'));
});

//Gulp Watch - set as the default
gulp.task('default', function () {
  gulp.watch('./src/sass/**/*.scss', ['build-css']);
  gulp.watch('./src/js/**/*.js', ['build-js']);
});
