var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'app/index.html',
  JS: ['app/javascript/*.js', 'app/javascript/*.jsx', 'lib/*.js'],
  MINIFIED_OUT: 'bundle.js',
  DEST_BUILD: 'dist'
};

gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

// No olvidar este despues!
// .pipe(uglify(path.MINIFIED_OUT))
