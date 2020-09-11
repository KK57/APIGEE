//postgre sample

const pg = require('pg');

const config = {
    host: '172.16.82.121',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'sa',     
    password: 'Syscom123',
    database: 'postgres',
    port: 1433,
    ssl: false
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else { queryDatabase(); }
});

function queryDatabase() {
  
    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM test;';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}