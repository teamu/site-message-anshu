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

async function getTodoByIdCoM(id) {
  const result = await query(`select * from commissions where commissions.id='${id}'`);
  if (result[0]) {
    return result[0];
  }
  return null;
}

async function getAllCoM() {
	return await query("select category,commission,status,cod from commissions");
}

async function removeCoM(id) {
  await query(`delete from commissions where commissions.id='${id}'`);
  return await query("select category,commission,status,cod from commissions");
}

async function updateCoM(todo) {

  if (todo.id) {

    const result1 = await query(`update commissions
      set category='${todo.category}',
      commission='${todo.commission}',
      status='${todo.status}',
      cod='${todo.cod}'
      where commissions.id=${todo.id}`);
    const result = await query(`select * from commissions where commissions.id='${todo.id}'`);
    if (result[0]) {
      return result[0];
    }

  } else {
    todo.date = new Date().toJSON().slice(0, 10);
    const inserted_data = await query(`insert into commissions (category,commission,status,cod) 
    values ('${todo.category}','${todo.commission}','${todo.status}','${todo.cod}')`);
    const result = await query(`select * from commissions where commissions.id='${inserted_data.insertId}'`);
    if (result[0]) {
      return result[0];
    }
  }
}

module.exports = {
  getTodoByIdCoM,
  getAllCoM,
  removeCoM,
  updateCoM
};