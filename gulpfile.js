var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    nano = require('gulp-cssnano'),
    concatCSS = require('gulp-concat-css'),
    autoprefixer = require('autoprefixer')
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;

var paths = {
  scripts: [
    'vendor/assets/components/jquery/dist/jquery.min.js',
    'vendor/assets/components/bootstrap/dist/js/bootstrap.min.js',
    'vendor/assets/components/unslider/dist/js/unslider-min.js',
    'src/js/*.js'
  ],
  styles: [
    'vendor/assets/components/bootstrap/dist/css/bootstrap.min.css',
    'vendor/assets/components/unslider/dist/css/unslider.css',
    'vendor/assets/components/unslider/dist/css/unslider-dots.css',
    'src/sass/*.scss',
    'src/sass/**/*.scss'
  ]
}

gulp.task('stylesheets', function(){
  var preprocessors = [];
  return gulp.src(paths.styles)
         .pipe(sourcemaps.init())
         .pipe(sass({ outputStyle: 'compressed' }))
         //.pipe(concatCSS('app.css'))
         .pipe(postcss(preprocessors))
         .pipe(nano())
         .pipe(sourcemaps.write('maps'))
         .pipe(gulp.dest('dist/css'))
         .pipe(reload({ stream: true }))
});

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
         .pipe(sourcemaps.init())
         .pipe(concat('app.js'))
         .pipe(uglify())
         .pipe(sourcemaps.write('maps'))
         .pipe(gulp.dest('dist/js'))
         .pipe(reload({ stream: true }))
});

gulp.task('browser-sync', function(){
  browserSync({ server: { baseDir: './' } });
});

gulp.task('watch', function(){
  gulp.watch(paths.styles, ['stylesheets', reload]);
  gulp.watch(paths.scripts, ['scripts', reload]);
  gulp.watch('*.html', reload);
});


gulp.task('default', ['watch', 'browser-sync', 'stylesheets', 'scripts']);
