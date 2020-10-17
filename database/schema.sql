-- look for this file, run it
-- basic set up and seed from here

-- /c postgres command, create tables etc
-- put (4) copy statement here (below the stuff)!

-- perhaps in a separate js file. DO THIS ONCE, COPY CSVS FIRST. node.fs

CREATE SCHEMA myschema;
DROP DATABASE [ IF EXISTS ] ratingsreviews;
CREATE DATABASE ratingsreviews;
-- CREATE TABLE [IF NOT EXISTS] table_name

CREATE TABLE "Reviews"
(
 "id"             int NOT NULL,
 "rating"         int NOT NULL,
 "summary"        text NOT NULL,
 "recommend"      int NOT NULL,
 "response"       text NOT NULL,
 "body"           text NOT NULL,
 "helpfulness"    int NOT NULL,
 "reported"       boolean NOT NULL,
 "date"           timestamp with time zone NOT NULL,
 "reviewer_email" text NOT NULL,
 "reviewer_name"  text NOT NULL,
 "product_id"     int NOT NULL,
 CONSTRAINT "PK_results" PRIMARY KEY ( "id" )
);


CREATE TABLE "Photos"
(
 "id"  int NOT NULL,
 "url" text NOT NULL,
 CONSTRAINT "FK_253" FOREIGN KEY ( "id" ) REFERENCES "Reviews" ( "id" )
);
CREATE INDEX "fkIdx_253" ON "Photos"
(
 "id"
);


CREATE TABLE "Characteristics"
(
 "id"         int NOT NULL,
 "product_id" int NOT NULL,
 "name"       text NOT NULL,
 CONSTRAINT "PK_characteristics" PRIMARY KEY ( "id" )
);


CREATE TABLE "Reviews_Characteristics"
(
"review_id"         int NOT NULL,
 "id"                int NOT NULL,
 "value"             text NOT NULL,
 "characteristic_id" int NOT NULL,
 CONSTRAINT "PK_characteristics" PRIMARY KEY ( "id" ),
 CONSTRAINT "FK_299" FOREIGN KEY ( "review_id" ) REFERENCES "Reviews" ( "id" ),
 CONSTRAINT "FK_333" FOREIGN KEY ( "characteristic_id" ) REFERENCES "Characteristics" ( "id" )
);
CREATE INDEX "fkIdx_299" ON "Reviews_Characteristics"
(
 "review_id"
);
CREATE INDEX "fkIdx_333" ON "Reviews_Characteristics"
(
 "characteristic_id"
);

-- id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness


-- INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
-- VALUES (value1, value2, value3,...valueN);

-- SELECT column1, column2, columnN FROM table_name;
-- SELECT * FROM table_name;

-- UPDATE table_name
-- SET column1 = value1, column2 = value2...., columnN = valueN
-- WHERE [condition];

-- DELETE FROM table_name
-- WHERE [condition];
