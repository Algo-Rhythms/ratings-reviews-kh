CREATE SCHEMA myschema;

DROP DATABASE [ IF EXISTS ] ratingsreviews;

CREATE DATABASE ratingsreviews;

CREATE TABLE [IF NOT EXISTS] table_name (
  -- user_id serial PRIMARY KEY,
  -- username VARCHAR ( 50 ) UNIQUE NOT NULL,
  -- password VARCHAR ( 50 ) NOT NULL,
  -- email VARCHAR ( 255 ) UNIQUE NOT NULL,
  -- created_on TIMESTAMP NOT NULL,

  -- user_id INT NOT NULL,
  -- role_id INT NOT NULL,
  -- grant_date TIMESTAMP,
  -- PRIMARY KEY (user_id, role_id),
  -- FOREIGN KEY (role_id)
  -- REFERENCES roles (role_id),
  -- FOREIGN KEY (user_id)
  -- REFERENCES accounts (user_id)
);

INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
VALUES (value1, value2, value3,...valueN);

SELECT column1, column2, columnN FROM table_name;
SELECT * FROM table_name;

UPDATE table_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];

DELETE FROM table_name
WHERE [condition];

-- *************** PostgreSQL ****************;

-- ************************************** "Characteristics"

-- CREATE TABLE "Characteristics"
-- (
--  "id"         int NOT NULL,
--  "fit_id"     int NOT NULL,
--  "size_id"    int NOT NULL,
--  "length_id"  int NOT NULL,
--  "width_id"   int NOT NULL,
--  "comfort_id" int NOT NULL,
--  "quality_id" int NOT NULL,
--  CONSTRAINT "PK_product/chars" PRIMARY KEY ( "id" ),
--  CONSTRAINT "FK_77" FOREIGN KEY ( "fit_id" ) REFERENCES "Fit" ( "id" ),
--  CONSTRAINT "FK_80" FOREIGN KEY ( "size_id" ) REFERENCES "Size" ( "id" ),
--  CONSTRAINT "FK_83" FOREIGN KEY ( "length_id" ) REFERENCES "Length" ( "id" ),
--  CONSTRAINT "FK_92" FOREIGN KEY ( "width_id" ) REFERENCES "Width" ( "id" ),
--  CONSTRAINT "FK_95" FOREIGN KEY ( "comfort_id" ) REFERENCES "Comfort" ( "id" ),
--  CONSTRAINT "FK_98" FOREIGN KEY ( "quality_id" ) REFERENCES "Quality" ( "id" )
-- );

-- CREATE INDEX "fkIdx_77" ON "Characteristics"
-- (
--  "fit_id"
-- );

-- CREATE INDEX "fkIdx_80" ON "Characteristics"
-- (
--  "size_id"
-- );

-- CREATE INDEX "fkIdx_83" ON "Characteristics"
-- (
--  "length_id"
-- );

-- CREATE INDEX "fkIdx_92" ON "Characteristics"
-- (
--  "width_id"
-- );

-- CREATE INDEX "fkIdx_95" ON "Characteristics"
-- (
--  "comfort_id"
-- );

-- CREATE INDEX "fkIdx_98" ON "Characteristics"
-- (
--  "quality_id"
-- );
