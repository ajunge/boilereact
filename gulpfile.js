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

/*
gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('build', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['watch']);

gulp.task('production', ['replaceHTML', 'build']);
*/

