// console.log(global);
global.$ = require('./gulp.config')

console.log($);

$.path.tasks.forEach(task => require(task)())

// $.gulp.task('default', $.gulp.series($.gulp.parallel('css')))



for(const taskName in $.tasks) {
    $.gulp.task(taskName, $.gulp.series($.gulp.parallel(...$.tasks[taskName])))
}