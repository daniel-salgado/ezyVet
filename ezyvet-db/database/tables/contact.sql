CREATE TABLE contact (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title ENUM('Mr', 'Mrs', 'Miss', 'Ms', 'Dr'),
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    company_name VARCHAR(64),
    date_of_birth DATETIME,
    notes VARCHAR(255),
    PRIMARY KEY (id)
);