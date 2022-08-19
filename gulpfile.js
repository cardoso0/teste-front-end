let gulp     = require('gulp');
let plumber  = require('gulp-plumber');
let uglify   = require('gulp-uglify');
let concat   = require('gulp-concat');
let rename   = require('gulp-rename');
 
// Source Path
let js_src   = "./src/js/*.js";
 
// Dist Path
let js_dist  = "./js/";
let js_dist_name = "scripts.js";
 
// Minify e Concat Scripts
gulp.task('scripts', function() {
	return gulp.src(js_src)
        .pipe(plumber())
	    .pipe(uglify())
		.pipe(concat(js_dist_name))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(js_dist));
});

// Watch
gulp.task('watch', function() {
	gulp.watch([js_src], ['scripts']);
});

// Default
gulp.task('default', ['scripts']);