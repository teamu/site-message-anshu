const mysql = require("promise-mysql");

async function query(sql) {
  const connection = await mysql.createConnection({
    host: "remotemysql.com",
    user: "w0Mt3hcTe8",
    password: "G4arxLoB68",
    database: "w0Mt3hcTe8"
  });
  try {
    const result = connection.query(sql);
    connection.end();
    return result;
  } catch (error) {
    throw error;
  }  
}


async function getAllU() {
    return await query("select carrier, methodname, lowerweight, upperweight, price FROM uploadshippingrate where 1");
  } 

async function upload(todos) {      
    query(`TRUNCATE TABLE uploadshippingrate`);
    //console.log(todos);
    
    for (let i = 0; i < todos.length; i++) { 
        //console.log(todos[i]);   
        const inserted_data = await query(`insert into uploadshippingrate (carrier, methodname, lowerweight, upperweight, price) values ('${todos[i].carrier}','${todos[i].methodname}','${todos[i].lowerweight}','${todos[i].upperweight}','${todos[i].price}')`);
    
    }
    return await query(`select carrier, methodname, lowerweight, upperweight, price FROM uploadshippingrate where 1`);

}

module.exports = {
    upload,
	getAllU
};
