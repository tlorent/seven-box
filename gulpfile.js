var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  // When a change is made to the index.html file, reload the browserSync function
  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/style.css', function(){
    browserSync.reload();
  });

});
