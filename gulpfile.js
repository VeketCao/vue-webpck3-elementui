/**
 * Created by Veket on 2017/10/16.
 * 压缩备份项目
 */
const gulp = require("gulp");
const zip = require("gulp-zip");
const moment = require("moment");
const zipPath ='./zip';
const sftp = require("gulp-sftp");

/**
 * 备份正式环境代码
 * gulp zip:pro
 * **/
gulp.task('zip:pro',function () {
    gulp.src('./dist/**/**/*')
        .pipe(zip(moment().format("YYYYMMDD")+'.pro.imip.zip'))
        .pipe(gulp.dest(zipPath));
});

/**
 * 发布代码到测试服务器上
 * gulp p:sit
 * **/
gulp.task('p:sit', function () {
    return gulp.src('dist/**')
        .pipe(sftp({
            host: '10.17.148.5',
            user: 'apps',
            pass:'p#0908',
            remotePath : '/apps/svr/htdocs'
        }));
});

