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

async function getTodoByIdD(id) {
  const result = await query(`select shipment_number,shipment_value,cod_value,debit_used,remaining_value,receivable_from,amount,status from debitnote where debitnote.id='${id}'`);
  if (result[0]) {
    return result[0];
  }
  return null;
}

async function getAllD() {
    query(`INSERT INTO historical_data ( email, module) VALUES ('shankhas@synapseco.com', 'Debit Note Management'`);
	return await query("select shipment_number,shipment_value,cod_value,debit_used,remaining_value,receivable_from,amount,status from debitnote");
}

async function removeD(id) {
  await query(`delete from debitnote where debitnote.id='${id}'`);
  return await query("select * from debitnote");
}

async function updateD(todo) {

  if (todo.id) {

    const result1 = await query(`update debitnote
      set shipment_number='${todo.shipment_number}',
      shipment_value='${todo.shipment_value}',
      cod_value='${todo.cod_value}',
      debit_used='${todo.debit_used}',
      remaining_value='${todo.remaining_value}',
      receivable_from='${todo.receivable_from}',      
      amount='${todo.amount}',      
      debit_note_details='${todo.debit_note_details}',
      status='${todo.status}'
      where debitnote.id=${todo.id}`);
    const result = await query(`select * from debitnote where debitnote.id='${todo.id}'`);
    if (result[0]) {
      return result[0];
    }

  } else {
    todo.date = new Date().toJSON().slice(0, 10);
    const inserted_data = await query(`insert into debitnote (shipment_number,shipment_value,cod_value,debit_used,remaining_value,receivable_from,amount,debit_note_details,status) 
    values ('${todo.shipment_number}','${todo.shipment_value}','${todo.cod_value}','${todo.debit_used}','${todo.remaining_value}','${todo.receivable_from}','${todo.amount}','${todo.debit_note_details}','${todo.status}')`);
    const result = await query(`select * from debitnote where debitnote.id='${inserted_data.insertId}'`);
    if (result[0]) {
      return result[0];
    }
  }
}

module.exports = {
  getTodoByIdD,
  getAllD,
  removeD,
  updateD
}; 