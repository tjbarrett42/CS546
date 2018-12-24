
// const formRoutes = require("./form");
// const resultRoutes = require("./result");

const constructorMethod = app => {
    // app.use("/", formRoutes);
    // app.use("/result", resultRoutes);
    
    // app.use("*", (req, res) => {
    //     res.status(404).json({ error: "Not found" });
    // });
    app.use("/", (req, res) => {
        res.render("palindrome/static",{});
    });
};

module.exports = constructorMethod;