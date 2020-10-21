const express = require('express');

const app = express();
const PORT = 3001;

// const query = require('../database/queries');
const {
  queryAllReviews,
  //  getMetaData, addNewReview, markReviewHelpful, reportReview,
} = require('../database/queries');

app.use(express.static('../client/dist'));
app.use(express.json());

// GET -- get a product's full list of reviews
app.get('/reviews/:product_id/list', (req, res) => {
  // req.params.product_id  === w/e product num, eg 5
  const id = req.params.product_id;
  queryAllReviews(id, (err, results) => {
    if (err) {
      res.sendStatus(404, err);
    } else {
      res.send(results);
    }
  });
});
// Status: 200 OK

// // GET -- get a product's meta data
// app.get('/reviews/:product_id/meta', (req, res) => {
//   const id = req.params.product_id;
//   getMetaData(id, (error, results) => {
//     if (error) {
//       res.sendStatus(404, error);
//     } else {
//       res.send(results);
//     }
//   });
// });
// // Status: 200 OK

// // POST -- user posts a new review
// app.post('/reviews/:product_id', (req, res) => {
//   const { id } = req.body;
//   // let {rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
//   // const id = req.params.product_id;
//   addNewReview(id, (err, results) => {
//     if (err) {
//       res.sendStatus(404, err);
//     } else {
//       res.send(results);
//     }
//   });
// });
// // Status: 201 CREATED

// // PUT -- udpdate if a user marks the review as helpful
// app.put('/reviews/helpful/:review_id', (req, res) => {
//   const helpful = req.params.review_id;
//   markReviewHelpful(helpful, (err, results) => {
//     if (err) {
//       res.sendStatus(204, err);
//     } else {
//       res.send(results);
//     }
//   });
// });

// // PUT -- updaate if a review is reported
// app.put('/reviews/report/:review_id', (req, res) => {
//   const report = req.params.review_id;
//   reportReview(report, (err, results) => {
//     if (err) {
//       res.sendStatus(204, err);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running and listening now on port: ${PORT}`);
});
