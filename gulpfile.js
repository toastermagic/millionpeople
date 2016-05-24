var gulp = require("gulp");
var ts = require("gulp-typescript");

var vendor = [
      "./node_modules/es5-shim/es5-shim.js",
      "./node_modules/angular/angular.js",
      "./node_modules/angular-animate/angular-animate.js",
      "./node_modules/angular-aria/angular-aria.js",
      "./node_modules/angular-messages/angular-messages.js",
      "./node_modules/angular-material/angular-material.js",
      "./node_modules/json3/lib/json3.js",
      "./node_modules/angular-resource/angular-resource.js",
      "./node_modules/angular-cookies/angular-cookies.js",
      "./node_modules/angular-sanitize/angular-sanitize.js",
      "./node_modules/angular-route/angular-route.js",
      "./node_modules/lodash/lodash.js",
      "./node_modules/angular-socket-io/socket.js",
      "./node_modules/socket.io-client/socket.io.js",

      "./node_modules/angular-material/angular-material.css",
      "./node_modules/animate.css/animate.css"
];

var tsProject = ts.createProject("client/tsconfig.json");

gulp.task("watch", ["build:client", "build:dotnet", "copyHtml"], function () {
    gulp.watch("./client/**/*.html", ["copyHtml"]);
    gulp.watch("./client/**/*.js", ["copyJs"]);
    gulp.watch("./client/**/*.jade", ["transformJade"]);
    gulp.watch("./client/**/*.ts", ["build:client"]);
//    gulp.watch("./server/**/*.cs", ["build:dotnet"]);
});

gulp.task("build:client", ["copyJs", "transformJade", "copyHtml", "copyCss", "injectVendor"]);

gulp.task("build:dotnet", function () {
    var shell = require("gulp-shell");
    // does not work
    return shell.task(["dotnet build"]);
});

gulp.task("compile-ts", function () {
    var sourcemaps = require("gulp-sourcemaps");

    var tsResult = tsProject.src(["./client/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./wwwroot/client"));
});

gulp.task("copyHtml", function () {
    return gulp.src(["./client/index.html"]).pipe(gulp.dest("./wwwroot"));
});

gulp.task("transformJade", function () {
    var jade = require('gulp-pug');
    
    return gulp
        .src(["./client/**/*.jade"])
        .pipe(jade())
        .pipe(gulp.dest("./wwwroot"));
});

gulp.task("copyCss", function () {
    return gulp.src(["./client/css/*.css"]).pipe(gulp.dest("./wwwroot/css"));
});

gulp.task("copyJs", function () {
    return gulp.src(["./client/**/*.js"]).pipe(gulp.dest("./wwwroot/"));
});

gulp.task("injectVendor", ["compile-ts", "copyHtml"], function () {
    var inject = require("gulp-inject");
    
    var vendorStream = gulp.src(vendor)
        .pipe(gulp.dest("./wwwroot/vendor"));

    return gulp.src("./wwwroot/index.html")
        .pipe(inject(vendorStream, { relative: true }))
        .pipe(gulp.dest("./wwwroot"));
});
