const express = require('express');
const bodyParser = require('body-parser');
const newRelic = require('newrelic');

const app = express();
const PORT = 3001;
const { photoReducer } = require('./dataprocessors');
const {
  queryAllReviews,
  // addNewReview, getMetaData, markReviewHelpful, reportReview,
} = require('../database/queries');

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET -- a product's full list of reviews
app.get('/reviews/:product_id/list', (req, res) => {
  const id = req.params.product_id;
  // console.log('GETTING LIST FOR PRODUCT ID:', id);
  queryAllReviews(id, (err, results) => {
    if (err) {
      res.sendStatus(404, err);
    } else {
      const dataStuff = {
        product: id,
        page: 0,
        count: 5,
        results: photoReducer(results.rows),
      };
      res.send(dataStuff);
    }
  });
});
// const dataStuff = {
//   product: id,
//   page: 0,
//   count,
//   results: photoReducer(req.params.sort, results.rows),
//   // results: photoReducer(req.params.sort, results.rows).slice(0, count),
// };
// res.send(dataStuff);

// // GET -- a product's meta data
// app.get('/reviews/:product_id/meta', (req, res) => {
//   const id = req.params.product_id;
//   getMetaData(id, (error, results) => {
//     if (error) {
//       res.sendStatus(404, error);
//     } else {
//       // const dataStuff = {
//       //   product: id,
//       //   page: 0,
//       //   count: 5,
//       //   results: results.rows,
//       // };
//       res.send(results);
//     }
//   });
// });

// POST -- user posts a new review
app.post('/reviews/product_id', (req, res) => {
  console.log('REQ.BODAY', req.body);
  const review = req.body;
  const id = req.params.product_id;
  // let {rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
  addNewReview(id, review, (err, results) => {
    if (err) {
      res.sendStatus(404, err);
    } else {
      res.send(results);
    }
  });
});

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
