const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const notify = require("gulp-notify");

gulp.task("zip",function(){
	gulp.src("./js/*.js")
	    .pipe(concat("new.js"))
	    .pipe(rename({suffix:".min"}))
	    .pipe(uglify())
	    .pipe(gulp.dest("./js"))
	    .pipe(notify({message:"ok!"}))
})