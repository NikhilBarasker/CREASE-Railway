const express = require("express");
const router = express.Router();
const {
  InvigilatorLogin,
  registerInvigilator,
  updateInvigilator,
  deleteInvigilator,
  fetchInvigilatorData,
  fetchInvigilatorDataByQRCode
} = require("../Controller/InvigilatorController");

router.get("/fetchInvigilatorData", fetchInvigilatorData);
router.get("/fetchInvigilatorDataByQR", fetchInvigilatorDataByQRCode);
router.post("/invigilatorlogin", InvigilatorLogin);
router.post("/registerinvigilator", registerInvigilator);
router.put("/update/", updateInvigilator); 
router.delete("/delete/:email", deleteInvigilator);

module.exports = router;


