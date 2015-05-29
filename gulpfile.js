"use strict";

var browserify = require("browserify");
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var jasmine = require('gulp-jasmine');

gulp.task("dist", function() {
  var b = browserify({
    entries: "./src/libpixel.js",
    standalone: "LibPixel"
  });

  return b.bundle()
    .pipe(source("libpixel.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("test", function() {
  return gulp.src("test/**/*_test.js")
        .pipe(jasmine());
});
