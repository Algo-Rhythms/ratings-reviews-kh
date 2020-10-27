const { connection } = require('./dbconnect.js');

connection.connect();

const queryAllReviews = (productId, cb) => {
  connection.query(`SELECT reviews.review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos.photo_id, photos.url FROM reviews LEFT OUTER JOIN photos ON reviews.review_id = photos.review_id WHERE reviews.product_id = ${productId}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// const getMetaData = (id, cb) => {
//   connection.query(`select row_to_json(chars) as characteristics
//   from(
//     select c.product_id, c.name
//     (select json_agg(chars)
//     from (
//       select * from characteristics.name where characteristics.characteristic_id = ${id}
//     ) chars
//   ) as characteristics
//   from characteristics as a) chars;`, (err, results) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, results);
//     }
//   });
// };
// const getMetaData = (productId, cb) => {
//   connection.query(`SELECT product_id, rating, recommend FROM characteristics
//   WHERE product_id = ${productId}`, (err, results) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, results);
//     }
//   });
// };

// const addNewReview = (productId, messageObj, cb) => {
//   const {
//     rating:,
//     summary:,
//     body:,
//     date:,
//     recommend:,
//     reviewer_name:,
//     helpfulness: 0,
//     report: false,
//     email:,
//     photos:,
//   } = messageObj;

//   connection.query(`INSERT into Reviews ${messageObj} where id = ${productId}`, (err, results) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, results);
//     }
//   });
// };

// const markReviewHelpful = (reviewId, cb) => {
//   connection.query(`Update Reviews SET review WHERE review_id = ${reviewId}`, (err, results) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, results);
//     }
//   });
// };

// const reportReview = (reviewId, cb) => {
//   connection.query(`Update Reviews SET review WHERE review_id = ${reviewId}`, (err, results) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, results);
//     }
//   });
// };

module.exports = {
  queryAllReviews,
  // addNewReview, getMetaData, markReviewHelpful, reportReview,
};
