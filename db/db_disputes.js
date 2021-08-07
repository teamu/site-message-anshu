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


async function getAllDispute() {
    //query(`INSERT INTO historical_data ( email, module) VALUES ('shankhas@synapseco.com', 'Dispute Management'`);
    return await query("select name, email, order_id, dipute_text FROM dispute where 1");
  } 

  async function getTodoByIdDispute(id) {
    const result = await query(`select * from dispute where dispute.id='${id}'`);
    if (result[0]) {
      return result[0];
    }
    return null;
  }
  
  async function removeDispute(id) {
    await query(`delete from dipute where dispute.id='${id}'`);
    return await query("select name, email, order_id, dipute_text FROM dispute where 1");
  }
  async function updateDispute(todo) {

    if (todo.id) {
  
      const result1 = await query(`update dispute
        set name='${todo.name}',
        email='${todo.email}',
        order_id='${todo.order_id}',
        dipute_text='${todo.dipute_text}'
        where dispute.id=${todo.id}`);
      const result = await query(`select * from dispute where dispute.id='${todo.id}'`);
      if (result[0]) {
        return result[0];
      }
  
    } else {
      todo.date = new Date().toJSON().slice(0, 10);
      const inserted_data = await query(`insert into dispute (name, email, order_id, dipute_text) 
      values ('${todo.name}','${todo.email}','${todo.order_id}','${todo.dipute_text}')`);
      const result = await query(`select * from dispute where dispute.id='${inserted_data.insertId}'`);
      return inserted_data;
    }
  }
module.exports = {
    getAllDispute,
	getTodoByIdDispute,
    removeDispute,
    updateDispute
};
