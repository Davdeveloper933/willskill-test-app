const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: true
    },

    webpack: {
        mode:isProd ?"production": "development"
    },

    fonter: {
        formats: ["ttf","woff","eot","svg"]
    },

    imagemin: {
        verbose: true
    }
}