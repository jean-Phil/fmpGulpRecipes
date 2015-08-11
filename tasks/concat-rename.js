var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it






gulp.task('concat', function() {
  return gulp.src(config.concat._in)
    .pipe($.concat('all.js'))
    .pipe(gulp.dest(config.concat._out));
});



gulp.task('rename', function(){
		var path = config.rename;
		return gulp
			.src(config.rename._in, { base: process.cwd() })
			.pipe($.rename(path))
			.pipe(gulp.dest(config.rename._out));  
});





/////////   HELPER FUNCTIONS   ////////////

function clean(path, done){
	log('Cleaning' + $.util.colors.blue(path));
	del(path, done);
}


function log(msg){
	if(typeof(msg) === 'object'){
		for( var item in msg ) {
			if(msg.hadOwnProperty(item)){
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}