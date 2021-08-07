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


async function getAllShip() {
    return await query("select shipping_partner_name, contact_name, contact_email, terms_and_conditions FROM shippingpartners where 1");
  } 

  async function getTodoByIdShip(id) {
    const result = await query(`select * from shippingpartners where shippingpartners.id='${id}'`);
    if (result[0]) {
      return result[0];
    }
    return null;
  }
  
  async function removeShip(id) {
    await query(`delete from shippingpartners where shippingpartners.id='${id}'`);
    return await query("select name, email, order_id, dipute_text FROM shippingpartners where 1");
  }
  async function updateShip(todo) {

    if (todo.id) {
  
      const result1 = await query(`update shippingpartners
        set shipping_partner_name='${todo.shipping_partner_name}',
        contact_name='${todo.contact_name}',
        contact_email='${todo.contact_email}',
        terms_and_conditions='${todo.terms_and_conditions}'
        where dispute.id=${todo.id}`);
      const result = await query(`select * from shippingpartners where shippingpartners.id='${todo.id}'`);
      if (result[0]) {
        return result[0];
      }
  
    } else {
      todo.date = new Date().toJSON().slice(0, 10);
      const inserted_data = await query(`insert into shippingpartners (shipping_partner_name, contact_name, contact_email, terms_and_conditions) 
      values ('${todo.shipping_partner_name}','${todo.contact_name}','${todo.contact_email}','${todo.terms_and_conditions}')`);
      const result = await query(`select * from shippingpartners where shippingpartners.id='${inserted_data.insertId}'`);
      return inserted_data;
    }
  }
module.exports = {
    getAllShip,
	getTodoByIdShip,
    removeShip,
    updateShip
};
