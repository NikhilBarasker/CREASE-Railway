const Info = require("../Schema/UserInfo");
const Contractor = require("../Schema/Contractor");
const Seller = require("../Schema/Seller");
const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Info.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res
        .status(200)
        .json({ user: user, message: "Authentication successful" });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const verifyUser = async (req, res) => {
  const { qrData } = req.body; 

  try {
    const user = await Info.findOne({ qrData });

    if (user) {
      const userData = {
        name: user.name,
        gender: user.gender,
        mobile: user.mobile,
        email: user.email,
      };

      res
        .status(200)
        .json({ user: userData, message: "User verified successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};


const registerUser = async (req, res) => {
  const { firstName,lastName, email, password ,designation} = req.body;
console.log('rrrrrrr',req.body)
  try {
   
    const existingUser = await Info.findOne({ email });
     
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Info({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      designation,
    });
console.log("hi");
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
const registerContractor = async (req, res) => {
  const { firstName,lastName, email, password ,designation,invigilator,qrcode} = req.body;
console.log('rrrrrrr',req.body)
  try {
   
    const existingUser = await Info.findOne({ email });
     console.log('hi')
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Contractor({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      designation,
      invigilator,
      qrcode
    });
console.log("hi");
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
const registerSeller = async (req, res) => {
  const { firstName,lastName, email, password ,designation,contractor} = req.body;
console.log('rrrrrrr',req.body)
  try {
   
    const existingUser = await Info.findOne({ email });
     
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Seller({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      designation,
      contractor:''
    });
console.log("hi");
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateUser = async (req, res) => {
  const { email, name, gender, mobile, password } = req.body;

  try {
    const user = await Info.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (gender) user.gender = gender;
    if (mobile) user.mobile = mobile;
    if (password) user.password = await bcrypt.hash(password, 10);

    await user.save();

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Info.findOneAndDelete({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const saveQRCode = async (req, res) => {
  const { qrcode } = req.body;

  try {
    // Find the contractor with the given QR code
    const contractor = await Contractor.findOne({ qrcode });

    if (!contractor) {
      return res.status(404).json({ message: "Contractor not found" });
    }

    // Update the contractor document with the new QR code value
    contractor.qrcode = qrcode;

    await contractor.save();

    res.status(200).json({ message: "QR Code saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  verifyUser,
  loginUser,
  registerUser,
  registerContractor,
  registerSeller,
  updateUser,
  deleteUser,
  saveQRCode
};
