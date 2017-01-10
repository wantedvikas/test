var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync')

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('./stylesheets/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 9'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./stylesheets'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function() {
  return gulp.src('./javascript/functions.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./javascript'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('refresh', function(){
  return browserSync.reload({stream:true});
});


gulp.task('watch', function() {
  gulp.watch('stylesheets/**', ['sass']);
  gulp.watch('javascript/**', ['scripts']);
  gulp.watch('./*.html', ['refresh']);
});

gulp.task('build', ['sass', 'scripts']);

gulp.task('default', ['build', 'browser-sync', 'watch']);
