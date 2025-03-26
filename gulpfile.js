const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // Corrigido de 'gulp-imagemim'

// Tarefa para compilar os arquivos SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) // Usa sass para SCSS
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) // Usa imagemin para imagens
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa de monitoramento
function watchFiles() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Monitora SCSS
    gulp.watch('./src/images/**/*', gulp.parallel(images));   // Monitora imagens
}

// Exporta as tarefas
exports.default = gulp.parallel(styles, images); // Executa styles e images em paralelo
exports.watch = watchFiles; // Tarefa 'watch'