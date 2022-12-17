const { src, dest, watch, parallel } = require("gulp");


const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer =require('autoprefixer');
const cssnano =require('cssnano');
const postcss =require('gulp-postcss');

const cache = require("gulp-cache");

const imgwebp = require('gulp-webp');

const terser = require('gulp-terser-js');

function css(done) {                                        
     src('src/scss/**/*.scss') 
     .pipe(plumber())        
     .pipe(sass())       
     .pipe(postcss([autoprefixer(),cssnano()]))
     .pipe(dest("build/css")); 
     done()
}

function imagenes(done) {

     src('src/img/**/*.jpg')
     .pipe(dest('build/img'))
     done()
}

function versionWebp(done) {
     
     const opciones = {
          quality: 70  
     }

     src('src/img/**/*.{png,jpg}') 
          .pipe(imgwebp(opciones))  
          .pipe(dest('build/img')) 
     done()
}

function javascript(done) {
     src('src/js/**/*.js')
          .pipe(terser())
          .pipe(dest("build/js"));
     done();
}

function dev(done){
     watch("src/scss/**/*.scss", css);
     watch("src/js/**/*.js", javascript)
     done();
}



exports.css =css;
exports.versionWebp= versionWebp;
exports.js=javascript;
exports.imagenes = imagenes;
exports.dev = parallel(javascript,versionWebp,imagenes,dev, css);