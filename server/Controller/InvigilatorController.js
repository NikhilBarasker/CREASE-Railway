  const Invigilator = require("../Schema/Invigilator");
  const bcrypt = require("bcryptjs");

  const InvigilatorLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
      const user = await Invigilator.findOne({ email });
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
  console.log("hi");
      if (isMatch) {
        
        res
          .status(200)
          .json({ user: user, message: "Authentication successful" });
        
      } else {
        res.status(401).json({ message: "Authentication failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error)
    }
  };

  const fetchInvigilatorData = async (req, res) => {
    try {
      const invigilators = await Invigilator.find(); 
      invigilators.forEach(element => {
        let password = element.password;
      });
      res.status(200).json(invigilators); 
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  };

  const registerInvigilator = async (req, res) => {
    const {
      fname,
      dob,
      mobile,
      profilePic,
      aadhar,
      aadharCard,
      policeVarificationDate,
      policeVarificationDocument,
      medicalValidityDate,
      madicalValidityDocument,
      validityAuthority,
    } = req.body;
    console.log("rrrrrrr", req.body);
    try {
     
      const existingUser = await Invigilator.findOne({ aadhar });
      if (existingUser) {
        
        return res.status(400).json({ message: "User already exists" });
      }
console.log('hi')
      const newUser = new Invigilator({
        fname,
        dob,
        mobile,
        profilePic,
        aadhar,
        aadharCard,
        policeVarificationDate,
        policeVarificationDocument,
        medicalValidityDate,
        madicalValidityDocument,
        validityAuthority,
      });
      await newUser.save();

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
      console.log(error)
    }
  };

  const updateInvigilator = async (req, res) => {
    const { firstName, lastName, mobile, email, password } = req.body;
    console.log('hi')
  console.log(req.body)
    try {
      const user = await Invigilator.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (mobile) user.mobile = mobile;
      if (email) user.email = email;
      if (password) user.password = await bcrypt.hash(password, 10);

      await user.save();

      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  };

  const deleteInvigilator = async (req, res) => {
    
    const { email } = req.params;
  console.log(req.params);
    try {
      
      const user = await Invigilator.findOneAndDelete({ email });

      if (!user) {
        
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  };


  module.exports = {
    fetchInvigilatorData,
    InvigilatorLogin,
    registerInvigilator,
    updateInvigilator,
    deleteInvigilator,
  };
