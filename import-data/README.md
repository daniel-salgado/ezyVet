# ezyVet Data Engineer Practical Task Brief

## Objective:
Write a simple script to pipe data from the attached CSV into the MySQL tables provided

## Supplied:
CSV should be attached inside ZIP Database tables provided

## Requirements:
* All data from the CSV must be processed into the provided tables.
* Data must be sanitized to be safely inserted
* Data must be consistent when exported as is when imported.
* First and Last names must have the first letter capitalized.
* Business Names must have acronyms be capitalized.
* Mobile numbers must have a 64 prefixed
* Landline numbers must have 09 prefixed
* The `contact_id` field in the address and phone tables must match to an existing record with the same value in the `id` field of the contact table
* You can use any language for any code that is written. Preferably use PHP 7.0 where possible.
* MySQL 5.7 is to be used

This task should take 1-2 hours max.

## Running Locally

npm install
npm start


## Instructions

1. Create the tables, stored procedure and event which you can find in the folder ezyVet-DB
2. run npm install
3. run npm start. This will create a server listening to localhost:5000
4. Use Postmand to send the file
5. On Postman use POST method, form-data selected. On Body insert a key named contacts and attach a file in the value.
6. Click Send.


## Explanation

I created a node project thinking of a cloud platform.
So, somehow a person or another external software will send a file using POST method and from there the function will grab thsi file, saniate it and then save in a stage table.
There is a Job that runs in every minute that will get these data and execute a stored procedure.
This SP will grab only the records that were not processed yet (isProcessed = 0) and insert in each table rescpecting the contac_id from contacts.

## Limitations

* First thing missing is the unit test. Although this is a very important thing to implement, I found that I would spend a lot of time trying to covering all the process.
* Need more steps and validations regarding the data. If the same file is uploaded, new records will be created instead of updating the exiting ones.
