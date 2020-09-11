// test.js
var mysql = require('mysql');
// 建立連線
var conn = mysql.createConnection({
    host: '172.104.117.165',
    user: 'carrefour-web',
    password: 'carrefour-web-9527',
    database: 'carrefour-web'
});
// 建立連線後不論是否成功都會呼叫
conn.connect(function (err) {
    if (err) throw err;
    queryData();
});


function queryData() {
    conn.query('SELECT * FROM `user`', function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    console.log('select ended!');
    // 其他的資料庫操作，位置預留
    // 關閉連線時呼叫
    // conn.end(function (err) {
    //     if (err) throw err;
    //     console.log('connect end');
    // });

}

module.exports = {
    query : queryData
}
