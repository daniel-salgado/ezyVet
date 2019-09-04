const mysql = require('mysql');



(async () => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '22253737',
        database: 'ezyVetDB'
    });
    console.log('connection', connection.state);

    await connection.connect();
    console.log('connection', connection.state);

    await connection.query('SELECT * from stage', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    console.log('connection', connection.state);

    });

    await connection.end();

})();