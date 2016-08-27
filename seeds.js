var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "Emerald Forest",
        image: "http://vignette2.wikia.nocookie.net/grimeclipse/images/0/0d/Ge_steam-ea_trailer_00003.png/revision/latest?cb=20151202032357",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },    
    {
        name: "Forever Fall",
        image: "http://vignette3.wikia.nocookie.net/rwby/images/8/84/RedForestWideView.png/revision/latest?cb=20140318031847",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },     
    {
        name: "Amity Colosseum",
        image: "http://vignette4.wikia.nocookie.net/rwby/images/1/15/V3_01_Amity.png/revision/latest?cb=20151116094417",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }    
];

function seedDB(){
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("Removed campgrounds.");
        }
        // ADD A FEW CAMPGROUNDS
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             // ADD A COMMENT
        //             Comment.create(
        //                 {
        //                     text: "This is a default comment",
        //                     author: "Admin"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Added new comment");
        //                     }
        //                 });
        //         }

        //     });
            
        // });
        
    });
    // ADD A FEW COMMENTS
}


module.exports = seedDB;

