CREATE TABLE phone (
    id INT(11) NOT NULL AUTO_INCREMENT,
    contact_id INT(11) NOT NULL,
    name VARCHAR(64),
    content VARCHAR(64),
    type ENUM('Home', 'Work', 'Mobile', 'Other'),
    PRIMARY KEY (id)
);