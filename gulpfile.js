var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    plumber = require('gulp-plumber'),
    template = require('gulp-template'),
    config = require('./gulpconfig.json'),
    cached = require('gulp-cached'),
    remember = require('gulp-remember')

//css
gulp.task('css', function() {
    return gulp.src(config.src.css)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(rename({
          suffix: '.min'
         }))
        .pipe(gulp.dest(config.dest.css))
})

gulp.task('css-min',function() {
    return gulp.src(config.src.cssPub)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(config.dest.css))
})

// js
gulp.task('js', function() {
    return gulp.src(config.src.js)
        .pipe(plumber())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(config.dest.js))
})

gulp.task('js-min',function() {
    return gulp.src(config.src.jsPub)
        .pipe(plumber())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.js))
})

// img
gulp.task('img', function() {
    return gulp.src(config.src.img)
        .pipe(plumber())
        .pipe(gulp.dest(config.dest.img))
})

// html
gulp.task('html', function() {
    return gulp.src(config.src.html)
        .pipe(plumber())
        .pipe(template({
          js: '<script src="lib/framework7.min.js"></script>',
          css:'<link rel="stylesheet" href="lib/framework7.material.min.css">\n\t\t'
          +'<link rel="stylesheet" href="lib/framework7.material.colors.min.css">'
        }))
        .pipe(gulp.dest(config.dest.html))
})

gulp.task('html-min', function() {
    return gulp.src(config.src.html)
        .pipe(plumber())
        .pipe(template({
          js: '',
          css:''
        }))
        .pipe(gulp.dest(config.dest.html))
})

// html
gulp.task('lib', function() {
    return gulp.src(config.src.lib)
        .pipe(plumber())
        .pipe(gulp.dest(config.dest.lib))
})


// watch
gulp.task('browserSync', function() {
    browserSync({
        open: false,
        files: [
            config.dest.css,
            config.dest.js,
            config.dest.img,
            config.dest.lib,
            config.dest.html
        ],
        server: {
            baseDir: "./dist/"
        }
    })
})

// clean
gulp.task('clean', function() {
    return gulp.src(config.src.clean, {
            read: false
        })
        .pipe(clean())
})

gulp.task('default', ['css', 'js', 'html', 'img', 'lib','browserSync'], function() {
    var watcher = gulp.watch(config.src.css, ['css'])
    gulp.watch(config.src.html, ['html'])
    gulp.watch(config.src.img, ['img'])
    gulp.watch(config.src.js, ['js'])
    gulp.watch(config.src.lib, ['lib'])
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

gulp.task('publish', ['clean'], function() {
    gulp.start('css-min', 'js-min','html-min', 'img')
})
