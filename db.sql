-- Active: 1737685679475@@_@5432@codex_julie_practice@public
create Table clients

(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
email TEXT NOT NULL
);

CREATE TABLE phones

(
id SERIAL PRIMARY KEY,
client_id INT REFERENCES clients(id),
phone_number TEXT NOT NULL
);