/**
 * npm install -g gulp
 * npm install -g browser-sync
 */

var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	less = require('gulp-less');

// var app = gulp.env.app;

gulp.task('serve', ['less'], function(){
	browserSync.init({
		notify: false,
		port: 9001,
		server: {
			baseDir: './',
		}
	});

	gulp.watch('./css/*.less',
	 ['less']);

	gulp.watch([
    	'./html/*.html',
    	'./css/*.css'
  	]).on('change', reload);
});


gulp.task('less', function(){	
	gulp.src('./css/*.less')
	.pipe(less())
	.pipe(gulp.dest('./css/'))
	.pipe(reload({stream: true}));	
});	
