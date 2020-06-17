const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

var inbox =     require("./data/Inbox.json")
var outbox = require("./data/outbox.json")
var User = require("./data/User.json")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/GetInbox', function(req, res) {
    
    res.json(inbox);
});

app.get('/GetOutbox', function(req, res) {
    
    res.json(outbox);
});

app.post('/DeleteInboxEmail', function(req, res) {
        
    inbox = inbox.filter(function(value, index, arr){
        
        return value.id != req.body.id;
    
        });
    res.json(inbox);
});
app.post('/DeleteOutboxEmail', function(req, res) {

    outbox = outbox.filter(function(value, index, arr){
        
        return value.id != req.body.id;

    });
    res.json(outbox);

});

/**/ 
app.post('/SendEmail', function(req, res) {
    let data = req.body
    data["id"] = outbox[outbox.length -1].id + 1
    outbox.push(data)
    res.json({status:"success"})
});



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});