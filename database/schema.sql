-- \c postgres command, create tables etc
-- put (4) copy statement here (below the stuff)!

-- perhaps in a separate js file. DO THIS ONCE, COPY CSVS FIRST. node.fs

--SERIAL PRIMARY KEY?

-- CREATE SCHEMA myschema;
-- CREATE DATABASE ratingsreviews;
--\c into ratingsreviews;


-- id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness
-- 1,1,5,"2019-01-01","This product was great!","I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.",true,false,"funtime","first.last@gmail.com",,8
CREATE TABLE "reviews"(
 "review_id"      int NOT NULL GENERATED ALWAYS AS IDENTITY,
 "product_id"     int NOT NULL,
 "rating"         text NOT NULL,
 "date"           date NOT NULL,
 "summary"        text NOT NULL,
 "body"           text NOT NULL,
 "recommend"      int NOT NULL,
 "reported"       boolean NOT NULL,
 "reviewer_name"  text NOT NULL,
 "reviewer_email" text NOT NULL,
 "response"       text,
 "helpfulness"    int NOT NULL,
 CONSTRAINT "PK_results" PRIMARY KEY ( "review_id" )
);


-- id,review_id,url
-- 1,5,"https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
CREATE TABLE "photos"(
 "photo_id"        int NOT NULL GENERATED ALWAYS AS IDENTITY,
 "review_id" int NOT NULL,
 "url"       text NOT NULL,
 CONSTRAINT "PK_photos" PRIMARY KEY ( "photo_id" ),
 CONSTRAINT "FK_253" FOREIGN KEY ( "review_id" ) REFERENCES "reviews" ( "review_id" )
);

CREATE INDEX "fkIdx_253" ON "photos"(
 "review_id"
);


-- id,product_id,name
-- 1,1,"Fit"
CREATE TABLE "characteristics"(
 "characteristic_id"         int NOT NULL GENERATED ALWAYS AS IDENTITY,
 "product_id" int NOT NULL,
 "name"       text NOT NULL,
 CONSTRAINT "PK_characteristics" PRIMARY KEY ( "characteristic_id" )
);
-- CREATE INDEX "fkIdx_337" ON "characteristics"(
--  "review_id"
-- );


-- id,characteristic_id,review_id,value
-- 1,1,1,4
CREATE TABLE "reviews_characteristics"(
  "reviews_characteristics_id"         int NOT NULL GENERATED ALWAYS AS IDENTITY,
 "characteristic_id" int NOT NULL,
 "review_id"         int NOT NULL,
 "value"             text NOT NULL,
 CONSTRAINT "FK_299" FOREIGN KEY ( "review_id" ) REFERENCES "reviews" ( "review_id" ),
 CONSTRAINT "FK_333" FOREIGN KEY ( "characteristic_id" ) REFERENCES "characteristics" ( "characteristic_id" )
);

CREATE INDEX "fkIdx_299" ON "reviews_characteristics"(
 "review_id"
);

CREATE INDEX "fkIdx_333" ON "reviews_characteristics"(
 "characteristic_id"
);


CREATE INDEX review_index ON reviews ("product_id");
CREATE INDEX photos_index ON photos ("review_id");

-- id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness
-- 1,1,5,"2019-01-01","This product was great!","I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.",true,false,"funtime","first.last@gmail.com",,8
\COPY reviews(product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) FROM '/Users/kymhooper/sei12/sdc/ratings-reviews-kh/database/reviewData.csv' WITH (FORMAT csv, header);

-- id,review_id,url
-- 1,5,"https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
\COPY photos(review_id, url) FROM '/Users/kymhooper/sei12/sdc/ratings-reviews-kh/database/photoData.csv' WITH (FORMAT csv, header);

-- id,product_id,name
-- 1,1, 'fit'
\COPY characteristics(product_id, name) FROM '/Users/kymhooper/sei12/sdc/ratings-reviews-kh/database/charData.csv' WITH (FORMAT csv, header);

-- id,characteristic_id,review_id,value
-- 1,1,1, 4
\COPY reviews_characteristics(characteristic_id, review_id, value) FROM '/Users/kymhooper/sei12/sdc/ratings-reviews-kh/database/charReviewData.csv' WITH (FORMAT csv, header);


-- INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
-- VALUES (value1, value2, value3,...valueN);

-- SELECT column1, column2, columnN FROM table_name;
-- SELECT * FROM table_name;

-- UPDATE table_name
-- SET column1 = value1, column2 = value2...., columnN = valueN
-- WHERE [condition];

-- DELETE FROM table_name
-- WHERE [condition];
