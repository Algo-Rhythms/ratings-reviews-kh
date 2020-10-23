/* eslint-disable max-len */
const faker = require('faker');

// **column headers**
// id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness
// **example row**
// 6,2,5,"2019-06-16","I'm not a fan!","I don't like them",false,false,"negativity","first.last@gmail.com","Sorry to hear. Is there anything in particular you don't like?",0
const createReview = () => {
  // const id = faker.random.number(200);
  const product_id = faker.random.number(10000);
  const rating = faker.random.number(5);
  const date = JSON.stringify(faker.date.between('2018-01-01', '2020-12-12'));
  const summary = faker.lorem.paragraph();
  const body = faker.lorem.sentence();
  const recommend = faker.random.boolean();
  const reported = faker.random.boolean();
  const reviewer_name = faker.name.firstName();
  const reviewer_email = faker.internet.email();
  const response = faker.lorem.sentence();
  const helpfulness = faker.random.number(30);

  return `${product_id}, ${rating}, ${date}, ${summary}, ${body}, ${recommend}, ${reported}, ${reviewer_name}, ${reviewer_email}, ${response}, ${helpfulness}\n`;
};

// **column headers**
// id,review_id,url
// **example row**
// 1,5,"https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
const createPhoto = () => {
  // const id = faker.random.number(200);
  const reviewId = faker.random.number({
    min: 1,
    max: 10000,
  });
  const url = JSON.stringify(faker.image.imageUrl(640, 480, 'fashion', true));

  return `${reviewId}, ${url}\n`;
};

// **column headers**
// id,product_id,name
// **example row**
// 1,1,"Fit"
const createCharacteristics = () => {
  // const id = faker.random.number(200);
  const product_id = faker.random.number(100000);
  const characters = ['Fit', 'Length', 'Quality', 'Comfort', 'Width', 'Size'];
  const randomCharacter = JSON.stringify(characters[Math.floor(Math.random() * characters.length)]);
  //   const review_id = faker.name.firstName();
  return `${product_id}, ${randomCharacter}\n`;
};

// **column headers**
// id,characteristic_id,review_id,value
// **example row**
// 1,1,1,4
const createCharsReviews = () => {
  // const id = faker.random.number(200);
  const char_id = faker.random.number({
    min: 1,
    max: 99999,
  });
  const review_id = faker.random.number({
    min: 1,
    max: 99999,
  });
  const value = faker.random.number(5);
  return `${char_id}, ${review_id}, ${value}\n`;
};

module.exports = {
  createReview, createPhoto, createCharacteristics, createCharsReviews,
};
