const express = require("express");
const cors = require("cors");
const connectDB = require("./Databse/databse");
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const   PORT = process.env.PORT || 4000 
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
  })
);

connectDB();
const invigilatorRoutes = require("./Routes/InvigilatorRoutes");
const contractorRoutes = require("./Routes/ContractorRoutes");
const sellerRoutes = require("./Routes/SellerRoutes");

app.use("/invigilator", invigilatorRoutes);
app.use("/contractor", contractorRoutes);
app.use("/seller", sellerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
