module.exports = function (app) {

    var http = require('http');

    // api ---------------------------------------------------------------------

    app.get('/getEmployee', function (req, res) {

        var employeeList = 
        [
            {name:'simone',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Alessandro',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Marco',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Luca',age:'12',shoeSize:'9',title:'CTO'},
            {name:'Davide',age:'12',shoeSize:'9',title:'CTO'}
        ];
        console.log("req ajax");
        res.send(employeeList);


    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};