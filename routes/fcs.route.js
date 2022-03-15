const express = require("express");
const router = express.Router();

const {feeSetup, computeTransactionFee} = require("../controllers/fcs.controller");

router.post('/fee', feeSetup);
router.post('/compute-transaction-fee', computeTransactionFee);

module.exports.feeConfigSpecRouter = router;
