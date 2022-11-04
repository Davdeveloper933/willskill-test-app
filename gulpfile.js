const { watch,series,parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// configuration
const path = require("./config/path.js");
const app = require("./config/app.js");

// tasks
// const clear = require("./task/clear");
// const html = require("./task/html");
// const scss = require("./task/scss");
// const js = require("./task/js");
// const font = require("./task/font");
const img = require("./task/img");

// watch
const watcher = () => {
    // watch(path.html.watch, html).on("all", browserSync.reload);
    // watch(path.scss.watch, scss).on("all", browserSync.reload);
    // watch(path.js.watch, js).on("all", browserSync.reload);
    // watch(path.font.watch, font).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
}

//clear directory
// const clear = () => {
//     return del.deleteAsync("./public/**",{force: true});
// }

// browsersync

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

const build = series(
    // parallel(html,scss,js,font,img)
    img
)

const dev = series(
    build,
    parallel(watcher,server)
);

// exports.html = html;
// exports.scss = scss;
// exports.js = js;
// exports.font = font;
exports.img = img;


// сборка
// exports.default = app.isProd
//     ? build
//     : dev;

