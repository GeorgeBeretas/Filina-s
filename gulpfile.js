const gulp = require('gulp');

const $ = require('gulp-load-plugins')();

const browserSync = require('browser-sync'),
  reload = browserSync.reload;

const input = {
  'sass': 'styles/**/*.scss',
  'scripts': 'scripts/**/*.js',
  'vendor': 'scripts/vendor/**/*.js',
  'images': 'images/**/*',
  'graphics': 'graphics/**/*',
  'fonts': 'fonts/**/*'
},
  output = {
    'css': 'dist/styles',
    'styles': 'styles/',
    'scripts': 'js/',
    'images': 'images/',
    'graphics': 'graphics/',
    'fonts': 'fonts/'
  };

gulp.task('sass', function() {
  return gulp.src(input.sass)
    .pipe($.plumber(function(error) {
      console.log('Error happend!', error.message);
      this.emit('end');
    }))
    .pipe($.sass())
    .pipe($.autoprefixer('last 2 version'))
    .pipe(gulp.dest(output.styles))
    .pipe(reload({ stream: true }))
    .pipe($.notify({ message: 'CSS in the folder' }));
});



