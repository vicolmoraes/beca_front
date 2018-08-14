var gulp = require('gulp'), gulpSequence = require('gulp-sequence'), clean = require('gulp-clean'), htmlmin = require('gulp-htmlmin'), cssmin = require('gulp-cssmin'), jsmin = require('gulp-jsmin');

// ========== CLEAN gulp.task('clean', function () { console.log('gulp CLEAN'); return gulp.src('./dist/*') .pipe(clean()); });

// ========== HTML ========== MINIFY gulp.task('html:minify', function() { console.log('gulp HTML:MINIFY'); return gulp.src('./src/**/*.html') .pipe(htmlmin({collapseWhitespace: true, removeComments: true})) .pipe(gulp.dest('./dist')); });

// ========== HTML ========== WATCH gulp.task('html:watch', function () { console.log('gulp HTML:WATCH'); return gulp.watch('./src/**/*.html', ['html:minify']); });

// ========== CSS ========== MINIFY gulp.task('css:minify', function () { console.log('gulp CSS:MINIFY'); return gulp.src('./src/**/*.css') .pipe(cssmin()) .pipe(gulp.dest('./dist')); });

// ========== CSS ========== WATCH gulp.task('css:watch', function () { console.log('gulp CSS:WATCH'); return gulp.watch('./src/**/*.css', ['css:minify']); });

// ========== JS ========== MINIFY gulp.task('js:minify', function () { console.log('gulp JS:MINIFY'); return gulp.src('./src/**/*.css') .pipe(jsmin()) .pipe(gulp.dest('./dist')) });

// ========== JS ========== WATCH gulp.task('js:watch', function () { console.log('gulp JS:WATCH'); return gulp.watch('./src/**/*.js', ['js:minify']); });

// ========== RUN DEVELOPMENT gulp.task('dev', gulpSequence('clean', ['html:minify', 'css:minify', 'js:minify'], ['html:watch', 'css:minify', 'js:watch']));

// ========== RUN PRODUCTION gulp.task('prod', gulpSequence('clean', ['html:minify', 'css:minify', 'js:minify']));

// ========== RUN DEFAULT gulp.task('default', gulpSequence('prod'));