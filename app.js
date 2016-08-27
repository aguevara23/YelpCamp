var express     =   require("express"),
    app         =   express(),
    bodyParser  =   require("body-parser"),
    mongoose    =   require("mongoose"),
    flash       =   require("connect-flash"),
    passport    =   require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  =   require("./models/campground"),
    User        =   require("./models/user"),
    Comment     =   require("./models/comment"),
    seedDB      =   require("./seeds");

// REQUIRING ROUTES
var campgroundRoute = require("./routes/campgrounds"),
    commentRoute    = require("./routes/comments"),
    indexRoute       = require("./routes/index");
    
mongoose.connect("mongodb://localhost/yelp_camp");
// mongoose.connect("mongodb://Alex:penguin123@dbh00.mlab.com:27007/yelpcamp");
console.log(process.env.DATABASEURL);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "WhiteRose is the secret ship",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error= req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.use("/campgrounds", campgroundRoute);
app.use("/campgrounds/:id/comments", commentRoute);
app.use("/", indexRoute);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!");
});