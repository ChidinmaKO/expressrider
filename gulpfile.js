var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    nano = require('gulp-cssnano'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;



var paths = {
  scripts: [
    'vendor/assets/components/jquery/dist/jquery.min.js',
    'vendor/assets/components/bootstrap/dist/js/bootstrap.min.js',
    'vendor/assets/components/unslider/dist/js/unslider-min.js',
    'vendor/assets/components/slick-carousel/slick/slick.min.js',
    'src/js/*.js'
  ],
  styles: [
    'vendor/assets/components/bootstrap/dist/css/bootstrap.min.css',
    'vendor/assets/components/unslider/dist/css/unslider.css',
    'vendor/assets/components/unslider/dist/css/unslider-dots.css',
    'vendor/assets/components/slick-carousel/slick/slick.css',
    'src/sass/*.scss',
    'src/sass/**/*.scss'
  ]
}


gulp.task('styles', function() {
    var processors = [
    autoprefixer({browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']})
    ]
    gulp.src(paths.styles)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concatCss("app.css"))
        .pipe(postcss(processors))
        .pipe(nano())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));
});

gulp.task('scripts', function() {
    gulp.src(paths.scripts)
    	.pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('dist/maps'))
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles', reload]);
    gulp.watch(paths.scripts, ['scripts', reload]);
    gulp.watch('*.html', reload);
});

gulp.task('default', ['styles', 'scripts', 'browser-sync', 'watch']);
