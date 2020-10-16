var gulp=require("gulp")
const htmlmin=require("gulp-htmlmin")

gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true // 压缩 html
    }))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("images",function(){
    return gulp.src("./images/*.{jpg,png}")
    .pipe (gulp.dest("dist/images/"))
    .pipe(connect.reload());

})

gulp.task("data",function(){
    return gulp.src(["./data/*.json","!package.json"])
    .pipe(gulp.dest("dist/data/"))
    .pipe(connect.reload());
})

//拷贝js
gulp.task("scripts",function(){
    return gulp.src(["./JS/*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//拷贝字体图标库
gulp.task("iconcopyfile1",function(){
    return gulp.src("icon-front1/**")
    .pipe(gulp.dest("dist/icon-front1"))
    .pipe(connect.reload());
})
gulp.task("iconcopyfile2",function(){
    return gulp.src("icon-front2/**")
    .pipe(gulp.dest("dist/icon-front2"))
    .pipe(connect.reload());
})
const sass=require('gulp-sass')
sass.compiler=require("node-sass")
const rename=require("gulp-rename")
const minifycss=require("gulp-minify-css")
gulp.task("sassIndex",function(){
    return gulp.src("./CSS/index.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("sassCommons",function(){
    return gulp.src("./CSS/commons.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("commons.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("sassLogin",function(){
    return gulp.src("./CSS/login.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("sassRegister",function(){
    return gulp.src("./CSS/register.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("shoppingCar",function(){
    return gulp.src("./CSS/shoppingcar.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("shoppingcar.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("Product",function(){
    return gulp.src("./CSS/product.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("product.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})


gulp.task("watch",function(){
    gulp.watch("*.html",['copy-html'])
    gulp.watch("./images/*.{jpg,png}",['images'])
    gulp.watch(["./data/*.json","!./data/package.json"],['data'])
    gulp.watch(["./CSS/index.scss"],['sassIndex'])
    gulp.watch(["./CSS/login.scss"],['sassLogin'])
    gulp.watch(["./CSS/register.scss"],['sassRegister'])
    gulp.watch(["./CSS/shoppingcar.scss"],['shoppingCar'])
    gulp.watch(["./CSS/product.scss"],['Product'])
    gulp.watch("./CSS/commons.scss",['sassCommons'])
    gulp.watch("icon-front1",['iconfile1'])
    gulp.watch("icon-front2",['iconfile2'])
    gulp.watch(["./JS/*.js","!gulpfile.js"],['scripts'])
})


gulp.task("build", ["copy-html","Product", "images", "scripts", "data", "sassIndex", "sassCommons","iconcopyfile1","sassLogin","sassRegister","iconcopyfile2","shoppingCar"])

const connect=require("gulp-connect")
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})
gulp.task("default",['watch','server'])
