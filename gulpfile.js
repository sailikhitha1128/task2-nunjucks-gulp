const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const fs = require('fs');
const path = require('path');


// Simple data function - you can expand this to read JSON files per page
function getDataForFile(file) {
return {
title: 'Internship Task Document - Recreated',
source_pdf: '/mnt/data/task2.pdf'
};
}


gulp.task('templates', function () {
return gulp.src('src/templates/index.njk')
.pipe(data(getDataForFile))
.pipe(nunjucksRender({
path: ['src/templates']
}))
// do not collapse whitespace so the output looks the same; keep options minimal
.pipe(htmlmin({ collapseWhitespace: false, removeComments: false }))
.pipe(gulp.dest('dist'))
.pipe(browserSync.stream());
});


gulp.task('assets', function () {
return gulp.src('src/assets/**')
.pipe(gulp.dest('dist/assets'))
.pipe(browserSync.stream());
});


gulp.task('serve', function () {
browserSync.init({
server: { baseDir: 'dist' },
port: 3000
});


gulp.watch('src/templates/**/*.njk', gulp.series('templates'));
gulp.watch('src/assets/**', gulp.series('assets'));
});


gulp.task('default', gulp.series(gulp.parallel('templates', 'assets'), 'serve'));