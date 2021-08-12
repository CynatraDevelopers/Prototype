module.exports = {
    mongoURI:"mongodb://localhost:27017/myapp",
    secretOrKey : "secret"  //secret here the code used by passport to create token. 
                            //Can make the it more secure by giving hard secret i.e adding special characters and incresing the length of string
};