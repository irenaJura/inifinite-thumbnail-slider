var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();

gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', gulp.series('style'))
	gulp.watch('sass/style.scss').on('change', browserSync.reload)
	gulp.watch('css/style.css').on('change', browserSync.reload)
	gulp.watch('index.html').on('change', browserSync.reload)
	gulp.watch('js/app.js').on('change', browserSync.reload)
});

gulp.task('style', function(done) {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		done();
});
