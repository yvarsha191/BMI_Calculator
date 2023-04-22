const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //for body-parser access


/*to request parser***************/
app.use(bodyParser.urlencoded({ extended: true }));

/*******normal request***********/

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
//});
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    //console.log(req.body.num1);
    var num1 = parseFloat(req.body.n1);
    var num2 = parseFloat(req.body.n2);
    var bmi = num1 / (num2 * num2);
    res.send("The BMI is:" + bmi);
});

// app.post("/", function (req, res) {
//     //console.log(req.body.num1);
//     var num1 = Number(req.body.n1);
//     var num2 = Number(req.body.n2);
//     var result = num1 + num2;
//     res.send("The result is:" + result);
// });
app.listen(3000, function () {
    console.log("server started on port 3000");
});