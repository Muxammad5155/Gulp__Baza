module.exports = {
    gulp:           require('gulp'),/* gulpio ishga tushuradi */
    GP:             require('gulp-load-plugins')(),
    bs:             require('browser-sync').create(),
    path:   {
        server:     './app/dist',
        tasks:      require('./gulp'),
        src:    {/* qattan olishi */
            html:   './app/src/*.{pug,html,jade}',
            css:    './app/src/style/*.scss',
            js:     './app/src/script/common.js',
            font:   './app/src/fonts/**/*.ttf',
            img:    './app/src/images/**/*.{gif,jpg,png,jpeg,webp,svg}'
        },
        dist:   {/* qattga tashashi */
            html:   './app/dist/',
            css:    './app/dist/style/',
            js:     './app/dist/script/',
            font:   './app/dist/fonts',
            img:    './app/dist/images'
        },
        watch:    {/* nimani kuzatib borishi */
            html:   ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            css:    './app/src/style/**/*.scss',
            js:     './app/src/script/**/*.js',
            font:   './app/src/fonts/**/*.ttf',
            img:    './app/src/images/**/*.*'
        }

    },
    // tasks: {
    //     default: ['css', 'js', 'html', 'font', 'img', 'server', 'watch']
    // }

    Tasks() {
        const getKey = Object.keys(this.path.watch)
        return getKey
    },
    tasks: {
        get default() {
            return [...$.Tasks(), 'server', 'watch']
        },
        get build() {
            return $.Tasks()
        }
    }



}

