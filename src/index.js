const pg = require('pg');

const connectionString = {
    host: '127.0.0.1',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 5432,
};

console.log(`connecting to DB: ${process.env.DATABASE_USER};${process.env.DATABASE_PASSWORD};${process.env.DATABASE_NAME}`);

const pool = new pg.Pool(connectionString);

pool.connect(function(err, client, done) {

    console.log(`ERROR: ${err}`);

    const query = client.query(new pg.Query("select * from t_test"))
    query.on('row', (row) => {
        console.log(row);
    });
    query.on('end', (res) => {
        // pool shutdown
        console.log("ending");
        pool.end()
    });
    query.on('error', (res) => {
        console.log(res);
    });

    done()
});
