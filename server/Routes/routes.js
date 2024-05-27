// routes.js
const express = require("express");
const router = express.Router();
const {
  verifyUser,
  loginUser,
  registerUser,
  registerContractor,
  registerSeller,
  updateUser,
  deleteUser,
  saveQRCode,
} = require("../Controller/controller");

router.get("/verify", verifyUser);
router.get("/login", loginUser);
router.post("/registercontractor", registerContractor);
router.post("/registerseller", registerSeller);
router.post("/register", registerUser);
router.put("/update", updateUser); 
router.delete("/delete", deleteUser);
router.post("/saveqrcode", saveQRCode);

module.exports = router;
