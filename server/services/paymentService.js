const paymentData = require("../data/paymentData");

exports.getPayment = function () {
  return paymentData.getPayment();
};

// exports.findCnpj = function (carteiraBody) {
//   return paymentData.findCnpj(carteiraBody);
// };

exports.savePayment = function (paymentBody) {
  return paymentData.savePayment(paymentBody);
};

exports.alterPayment = function (paymentBody) {
  return paymentData.alterPayment(paymentBody);
};

exports.deleteAPayment = function (paymentBody) {
  return paymentData.deleteAPayment(paymentBody);
};
