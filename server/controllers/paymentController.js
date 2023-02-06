const paymentService = require("../services/paymentService");
const { uuid } = require("uuidv4");

exports.get = ("/", (req, res) => getAllPayments(req, res));
exports.post = ("/", (req, res) => createAPayment(req, res));
exports.put = ("/", (req, res) => alterAPayment(req, res));
exports.delete = ("/", (req, res) => deleteAPayment(req, res));

const getAllPayments = async (req, res) => {
  try {
    const wallet = await paymentService.getPayment();
    res.status(200).send({ success: true, message: wallet });
  } catch (e) {
    res.status(500).send({ success: false, message: e.message });
  }
};

const createAPayment = async (req, res) => {
  try {
    const { title, valordopagamento, paymentdate, status } = req.body;
    const paymentBody = {
      id: uuid(),
      title,
      valordopagamento,
      paymentdate,
      status,
    };
    const wallet = await paymentService.savePayment(paymentBody);
    console.log(wallet);
    res.status(200).send({ success: true, message: wallet.rows });
  } catch (e) {
    res.status(500).send({ success: false, message: e.message });
  }
};

const alterAPayment = async (req, res) => {
  try {
    const paymentById = req.params.id;
    const { title, valordopagamento, updateAt } = req.body;
    const paymentBody = {
      paymentById,
      title,
      valordopagamento,
      updateAt,
    };
    await paymentService.alterPayment(paymentBody);
    res.status(200).send({ success: true, message: "alterado com sucesso" });
  } catch (e) {
    res.status(500).send({ success: false, message: e.message });
  }
};

const deleteAPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const paymentBody = {
      id,
    };
    console.log(paymentBody);
    await paymentService.deleteAPayment(paymentBody);
    res.status(200).send({ success: true, message: "Pagamento deletado" });
  } catch (e) {
    res.status(500).send({ success: false, message: e.message });
  }
};
