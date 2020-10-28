const fs = require('fs');
const {
  createReview, createPhoto, createCharacteristics, createCharsReviews,
} = require('./fakerdata');

// cd database node generatedata.jsss

const generateReviews = () => {
  const writeReviews = fs.createWriteStream('reviewData.csv');
  // let i = 1000000;
  let i = 100;
  const write = () => {
    let ok = true;
    do {
      i--;
      const newReview = createReview();
      if (i === 0) {
        writeReviews.write(newReview, 'utf-8', () => { writeReviews.end(); });
      } else {
        ok = writeReviews.write(newReview, 'utf-8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writeReviews.once('drain', write);
    }
  };
  write();
};

generateReviews();

const generatePhotos = () => {
  const writePhotos = fs.createWriteStream('photoData.csv');
  // let i = 10000000;
  let i = 100;
  const write = () => {
    let ok = true;
    do {
      i--;
      const newPhoto = createPhoto();
      if (i === 0) {
        writePhotos.write(newPhoto, 'utf-8', () => { writePhotos.end(); });
      } else {
        ok = writePhotos.write(newPhoto, 'utf-8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writePhotos.once('drain', write);
    }
  };
  write();
};

generatePhotos();

const generateCharacteristics = () => {
  const writeChars = fs.createWriteStream('charData.csv');
  // let i = 10000000;
  let i = 100;
  const write = () => {
    let ok = true;
    do {
      i--;
      const newChar = createCharacteristics();
      if (i === 0) {
        writeChars.write(newChar, 'utf-8', () => { writeChars.end(); });
      } else {
        ok = writeChars.write(newChar, 'utf-8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writeChars.once('drain', write);
    }
  };
  write();
};

generateCharacteristics();

const generateCharsReviews = () => {
  const writeCharReviews = fs.createWriteStream('charReviewData.csv');
  // let i = 1000000;
  let i = 10;
  const write = () => {
    let ok = true;
    do {
      i--;
      const newCharRev = createCharsReviews();
      if (i === 0) {
        writeCharReviews.write(newCharRev, 'utf-8', () => { writeCharReviews.end(); });
      } else {
        ok = writeCharReviews.write(newCharRev, 'utf-8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writeCharReviews.once('drain', write);
    }
  };
  write();
};

generateCharsReviews();
