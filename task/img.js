const { src, dest } = require("gulp");

// configuration
const path = require("../config/path.js");
const app = require("../config/app.js");


// plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "img",
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(app.imagemin))
        .pipe(dest(path.img.dest));
}

module.exports = img;