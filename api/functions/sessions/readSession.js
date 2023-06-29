const res = require('../../common/responses');
const config = require('../../common/config');
const mysql = require('mysql');

module.exports.handler=async(event, context, callback)=>{

    //creating database connections:
    const connectionPool = mysql.createPool({
        host: config.conf.db_host,
        user: config.conf.db_username,
        password: config.conf.db_password,
        database: config.conf.db_name,
    });



    const query = `select * from sessions;`;


    const results = await new Promise((resolve, reject) => {
        pool.query(query, (error, results, fields) => {
            if (error) {
                console.error(error);
                reject(results);
            }else{
                console.log('Reading the found items from the table...');
                resolve(results);
            }
    
        });
      });

      // Close the connection pool
      pool.end();


      if(results.length>0){
        console.log(`Result: ${results}`);
        return res._200;
      }

      else{
        console.log(`Not found any resources!`);
        return res._404;
      }


}