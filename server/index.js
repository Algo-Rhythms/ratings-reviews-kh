const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static('../client/dist'));

// this is all fine
// another comment
app.listen(PORT, () => {
  console.log(`Server running and listening now on port: ${PORT}`);
});
