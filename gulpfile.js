'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  //return gulp.src('./sass/**/*.scss')
  return gulp.src('./sass/style.scss')
    .pipe(sass({
      includePaths: [
        'node_modules',
        '/node_modules/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

gulp.task('bootstrap-sass', function() {
  //return gulp.src('./css/app.scss')
  return gulp.src('node_modules/bootstrap-sass/assets/stylesheets/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: './',
      index: 'app.html',
      directory: false
    }
  })
});

gulp.task('sass:watch',['browserSync', 'sass'], function () {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('app.html', browserSync.reload);
  gulp.watch('./sass/*.scss', browserSync.reload);
  gulp.watch(['./modules/*.js', './services/*.js'], browserSync.reload);
});