'use strict';

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var cssnano    = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gutil      = require('gulp-util');
var uglify     = require('gulp-uglify');
var imagemin   = require('gulp-imagemin');
var cache = require('gulp-cache');

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
  return gulp.src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('images', function(){
  return gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('./dist/assets/images'))
});

//Gulp Watch - set as the default
gulp.task('default', function () {
  gulp.watch('./src/sass/**/*.scss', ['build-css']);
  gulp.watch('./src/js/**/*.js', ['build-js']);
  gulp.watch('./src/*.html', ['copyHtml']);
  gulp.watch('./src/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
});
