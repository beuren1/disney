const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tarefa para compilar os arquivos SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa de monitoramento
function watchFiles() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Passa a função 'styles' diretamente
}

// Exporta as tarefas
exports.default = styles; // Tarefa padrão
exports.watch = watchFiles; // Tarefa 'watch'