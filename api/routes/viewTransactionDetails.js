var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(dummy);
});

module.exports = router;


var dummy = [
    {
        "eGift": false,
        "dateTime": "2020-03-21T20:13:08.291Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 458.26,
        "message": "",
        "payeeID": 10
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T05:50:10.412Z",
        "custID": 7,
        "expensesCat": "food",
        "amount": 100,
        "message": "Thanks for dinner!",
        "payeeID": 8
    },
    {
        "eGift": false,
        "dateTime": "2020-12-11T05:26:58.163Z",
        "custID": 7,
        "amount": 1,
        "message": "",
        "payeeID": 20
    },
    {
        "eGift": false,
        "dateTime": "2020-12-11T05:16:16.418Z",
        "custID": 7,
        "amount": 1,
        "message": "",
        "payeeID": 1
    },
    {
        "eGift": false,
        "dateTime": "2020-07-03T05:30:39.445Z",
        "custID": 20,
        "expensesCat": "Transport",
        "amount": 574.74,
        "message": "",
        "payeeID": 7
    },
    {
        "eGift": false,
        "dateTime": "2019-12-20T06:05:18.860Z",
        "custID": 7,
        "expensesCat": "Food",
        "amount": 947.42,
        "message": "",
        "payeeID": 4
    },
    {
        "eGift": false,
        "dateTime": "2020-12-11T05:25:16.381Z",
        "custID": 7,
        "amount": 1,
        "message": "Test",
        "payeeID": 20
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T03:22:34.474Z",
        "custID": 7,
        "expensesCat": "food",
        "amount": 100,
        "message": "Thanks for dinner!",
        "payeeID": 8
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T03:35:26.071Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 1,
        "message": "msg",
        "payeeID": 18
    },
    {
        "eGift": true,
        "dateTime": "2020-10-03T23:31:22.075Z",
        "custID": 7,
        "expensesCat": "Entertainment",
        "amount": 279.4,
        "message": "Thanks. :)",
        "payeeID": 1
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T05:20:47.780Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 0.01,
        "message": "msg",
        "payeeID": 9
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T05:48:35.390Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 0.01,
        "message": "msg",
        "payeeID": 9
    },
    {
        "eGift": false,
        "dateTime": "2020-12-11T05:26:45.658Z",
        "custID": 7,
        "amount": 1,
        "message": "",
        "payeeID": 20
    },
    {
        "eGift": false,
        "dateTime": "2020-07-21T03:21:14.922Z",
        "custID": 7,
        "expensesCat": "Food",
        "amount": 307.61,
        "message": "",
        "payeeID": 22
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T05:43:18.680Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 0.01,
        "message": "msg",
        "payeeID": 9
    },
    {
        "eGift": true,
        "dateTime": "2019-12-13T23:33:36.728Z",
        "custID": 6,
        "expensesCat": "Insurance",
        "amount": 208.15,
        "message": "Thanks. :)",
        "payeeID": 7
    },
    {
        "eGift": false,
        "dateTime": "2020-12-11T05:25:12.242Z",
        "custID": 7,
        "amount": 1,
        "message": "Test",
        "payeeID": 20
    },
    {
        "eGift": false,
        "dateTime": "2020-07-01T04:23:04.299Z",
        "custID": 2,
        "expensesCat": "Transport",
        "amount": 630.08,
        "message": "",
        "payeeID": 7
    },
    {
        "eGift": false,
        "dateTime": "2019-12-15T22:33:33.805Z",
        "custID": 19,
        "expensesCat": "Shopping",
        "amount": 481.44,
        "message": "",
        "payeeID": 7
    },
    {
        "eGift": true,
        "dateTime": "2020-12-11T05:22:53.113Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 0.01,
        "message": "msg",
        "payeeID": 9
    },
    {
        "eGift": true,
        "dateTime": "2020-12-05T09:44:44.258Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 335.17,
        "message": "Thanks. :)",
        "payeeID": 8
    },
    {
        "eGift": false,
        "dateTime": "2020-05-09T13:25:25.664Z",
        "custID": 7,
        "expensesCat": "Transport",
        "amount": 98.97,
        "message": "",
        "payeeID": 6
    },
    {
        "eGift": false,
        "dateTime": "2020-05-12T23:40:45.425Z",
        "custID": 8,
        "expensesCat": "Shopping",
        "amount": 647,
        "message": "",
        "payeeID": 7
    },
    {
        "eGift": false,
        "dateTime": "2020-04-18T15:34:23.695Z",
        "custID": 10,
        "expensesCat": "Entertainment",
        "amount": 575.51,
        "message": "",
        "payeeID": 7
    },
    {
        "eGift": true,
        "dateTime": "2020-11-23T12:53:18.982Z",
        "custID": 11,
        "expensesCat": "Entertainment",
        "amount": 810.42,
        "message": "Thanks. :)",
        "payeeID": 7
    },
    {
        "eGift": false,
        "dateTime": "2020-12-11T04:51:27.196Z",
        "custID": 7,
        "amount": 1,
        "message": "Test",
        "payeeID": 20
    }
]