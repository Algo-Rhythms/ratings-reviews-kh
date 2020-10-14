const express = require('express');
const app = express();
const PORT = 3001;

// const {} = require("");

app.use(express.static('../client/dist'));

// GET
// app.get('/reviews/:product_id/list', (req, res) => {
//   name((err, results) => {
//     if (err) {
//       res.sendStatus(404, error);
//     } else {
//       res.send(results);
//     }
//   })
// })
// Status: 200 OK
// Parameter	Type	Description
// product_id	integer	Specifies the product for which to retrieve reviews.
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.
// sort	text	Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"

// GET
// app.get('/reviews/:product_id/meta', (req, res) => {
//   name((err, results) => {
//     if (err) {
//       res.sendStatus(404, error);
//     } else {
//       res.send(results);
//     }
//   })
// })
// Status: 200 OK
// product_id	integer	Required ID of the product for which data should be returned

// POST
// app.post('/reviews/:product_id', (req, res) => {
//   let var = req.body.;
//   name(var, (err, results) => {
//     if (err) {
//       res.sendStatus(404, err);
//     } else {
//       res.sendStatus(201);
//     }
//   })
// })
// Status: 201 CREATED

// PUT
// app.put('/reviews/helpful/:review_id', (req, res) => {
//   let var = req.params.;
//   name(var, var, (err, results) => {
//     if (err) {
//       res.sendStatus(204, err);
//     } else {
//       res.sendStatus(201);
//     }
//   })
// });

// PUT
// app.put('/reviews/report/:review_id', (req, res) => {
//   let var = req.params.;
//   name(var, var, (err, results) => {
//     if (err) {
//       res.sendStatus(204, err);
//     } else {
//       res.sendStatus(201);
//     }
//   })
// });

app.listen(PORT, () => {
  console.log(`Server running and listening now on port: ${PORT}`);
});
