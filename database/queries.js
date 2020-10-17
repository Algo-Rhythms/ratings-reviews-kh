const dbconnection = require('../database/dbconnect.js');

const addNewReview = (messageObj, productId) => {
    let {rating, summary, body, recommend, name, email, photos, characteristics} = messageObj;
    dbconnection.query(`make sql here; send to db to insert into table reviews where etc ...`)
}

module.exports = {addNewReview, }

// dbconnection.query("DELETE FROM products WHERE name = $1", ['John Doe'], (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
//     dbconnection.end();
// })