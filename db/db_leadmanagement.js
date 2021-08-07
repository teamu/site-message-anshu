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

async function getTodoById(id) {
  const result = await query(`select * from leadmanagement where leadmanagement.id='${id}'`);
  if (result[0]) {
    return result[0];
  }
  return null;
}

async function getAll() {
  //query(`INSERT INTO historical_data ( email, module) VALUES ('shankhas@synapseco.com', 'Lead Management'`);
  return await query("select business_name,business_category,contact_name,lead_source,contact_date,lead_status,discount_min_backorder_value_day,discount_min_backorder_value_month FROM leadmanagement");

}

async function remove(id) {
  await query(`delete from leadmanagement where leadmanagement.id='${id}'`);
  return await query("select * from leadmanagement");
}

async function update(todo) {

  if (todo.id) {

    const result1 = await query(`update leadmanagement
      set business_name='${todo.business_name}',
      business_category='${todo.business_category}',
      lead_source='${todo.lead_source}',
      contact_name='${todo.contact_name}',
      contact_date='${todo.contact_date}',
      lead_status='${todo.lead_status}',
      discount_min_backorder_value_day='${todo.discount_min_backorder_value_day}',
      discount_min_backorder_value_month='${todo.discount_min_backorder_value_month}'
      where leadmanagement.id=${todo.id}`);
    const result = await query(`select * from leadmanagement where leadmanagement.id='${todo.id}'`);
    if (result[0]) {
      return result[0];
    }

  } else {
    todo.date = new Date().toJSON().slice(0, 10);
    const inserted_data = await query(`insert into leadmanagement (business_name,business_category,contact_name,lead_source,contact_date,lead_status,discount_min_backorder_value_day,discount_min_backorder_value_month) 
    values ('${todo.business_name}','${todo.business_category}','${todo.contact_name}','${todo.lead_source}','${todo.contact_date}','${todo.lead_status}','${todo.discount_min_backorder_value_day}','${todo.discount_min_backorder_value_month}')`);
    const result = await query(`select * from leadmanagement where leadmanagement.id='${inserted_data.insertId}'`);
    return inserted_data;
  }
}

module.exports = {
  getTodoById,
  getAll,
  remove,
  update
};