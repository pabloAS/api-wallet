const database = require("../infra/database");

exports.getPayment = async function () {
  try {
    const responseData = await database.query("select * from payments");
    return responseData.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};

exports.savePayment = async function (paymentBody) {
  try {
    const responseData = await database.query(
      `INSERT INTO payments (
        idpayment, 
        title, 
        valordopagamento, 
        status
        ) VALUES ($1, $2, $3, $4)`,
      [
        paymentBody.id,
        paymentBody.title,
        paymentBody.valordopagamento,
        paymentBody.status,
      ]
    );
    return responseData.rows;
  } catch (e) {
    throw new Error(e.message);
  }
};

exports.alterPayment = async function (paymentBody) {
  try {
    const responseData = await database.query(
      `UPDATE payments 
        SET TITLE='${paymentBody.title}', 
        valorDoPagamento='${paymentBody.valordopagamento}',
        update_at='${paymentBody.updateAt}' 
        WHERE idpayment='${paymentBody.paymentById}'
      `
    );
    return responseData;
  } catch (e) {
    throw new Error(e.message);
  }
};

exports.deleteAPayment = async function (paymentBody) {
  try {
    console.log(paymentBody);
    const responseData = await database.query(
      `DELETE FROM payments WHERE idpayment = '${paymentBody.id}`
    );
    return responseData;
  } catch (e) {
    throw new Error(e.message);
  }
};
