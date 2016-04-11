var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');


// Styles task
gulp.task('styles', function() {
  gulp.src('style.scss')
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({onError: function(e) { console.log(e); } }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(minifyCss())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('dist'));
});

// Watch task
gulp.task('watch', ['styles'], function() {
  gulp.watch(['*.scss'], [
    'styles'
  ]);
});

// Dev task
gulp.task('dev', function() {
  // Run the watch task, to keep taps on changes
  gulp.run('watch');
});
