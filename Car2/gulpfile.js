var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var pngquant = require('imagemin-pngquant');

var add = '../Car2/img/hand/first/'

// 任务：压缩jpg
gulp.task('jpgmin',function(){
    return gulp.src(add + '*.jpg')
           .pipe(imagemin({
                progressive: true,
                use:[jpegtran()]
           }))
           .pipe(gulp.dest(add + 'img_min/'));
});
// 任务：压缩png
gulp.task('pngmin',function(){
    return gulp.src(add + '*.png')
           .pipe(imagemin({
                quality: '65-80', 
                speed: 4,
                use:[pngquant()]
           }))
           .pipe(gulp.dest(add + 'img_min/'));
});

// 默认处理的任务：
gulp.task('default', function () {
    return gulp.start('jpgmin', 'pngmin');
});