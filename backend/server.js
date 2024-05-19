const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./database/User");
const Port = 3001;
const UserRegister = require("./database/registers");
const HospitalRegister = require("./database/Hospital");
const connectDB = require("./database/registerConnection");
const DonerFindSchema = require("./database/DonerFindSchema");
const DonerRegisterSchema = require("./database/DonerRegisterSchema");
const AmbulanceRegister = require("./database/Ambulance");
const BedsSchema=require("./database/BedsSchema")
var cors = require("cors");
app.use(cors());

//middlewarefor parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

//for registration page
app.post("/home", async (req, res) => {
  /* const DataSave=new connectDB(req.body);
   await DataSave.save();
   res.send("Save Data");*/
  console.log(req.body);
});
//for registration page

app.post("/adduser", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      confirmpassword,
      phonenumber,
      password,
    } = req.body;
    console.log(req.body);
    console.log(password);
    console.log(confirmpassword);
    if (password === confirmpassword) {
      const userToBeAdded = new UserRegister({
        firstname,
        lastname,
        phonenumber,
        email,
        password,
        confirmpassword,
      });
      await userToBeAdded.save();
      console.log("Saved successfully");
      res.status(201).json({ message: "Registration Successful" });
    } else {
      //log error.
      console.log("Not Saving.");
      res.status(500).json({ error: error });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//for contact us page
app.post("/contactus", async (req, res) => {
  try {
    const { Name, Phoneno, Email, Message } = req.body;
    console.log(req.body);

    const userContact = new User({
      Name,
      Phoneno,
      Email,
      Message
    });

    await userContact.save();
    console.log(req.body);
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Find Doner

app.post("/finddoner", async (req, res) => {
  try {
    const { Name, Phoneno, Email, Address, State, District, BloodGroup } =
      req.body;
    console.log(req.body);

    const donerfind = new DonerFindSchema({
      Name,
      Phoneno,
      Email,
      Address,
      State,
      District,
      BloodGroup,
    });
    await donerfind.save();
    console.log(req.body);
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Register Doner
app.post("/registerdoner", async (req, res) => {
  try {
    const { Name, Phoneno, Email, Address, State, District, BloodGroup } =
      req.body;
    console.log(req.body);

    const donerRegister = new DonerRegisterSchema({
      Name,
      Phoneno,
      Email,
      Address,
      State,
      District,
      BloodGroup,
    });
    await donerRegister.save();
    console.log(req.body);
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Hospital Registration
app.post("/hospitalreg", async (req, res) => {
  try {
    const {
      name,
      pincode,
      phone,
      emergency,
      email,
      address,
      state,
      district,
      password,
      confirmPassword,
    } = req.body;
    console.log(req.body);
    console.log(password);
    console.log(confirmPassword);
    if (password === confirmPassword) {
      const hospital = new HospitalRegister({
        name,
        pincode,
        phone,
        emergency,
        email,
        address,
        state,
        district,
        password,
        confirmPassword,
      });
      await hospital.save();
      console.log("Saved successfully");
      res.status(201).json({ message: "Registration Successful" });
    } else {
      //log error.
      console.log("Not Saving.");
      res.status(500).json({ error: error });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Login

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await UserRegister.findOne({ email });
    if (!login || login.password !== password) {
      return res.status(401).json({ error: "invalid username or password" });
    }
    res.status(200).json({ message: login.toJSON() });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

//Ambulance Register
app.post("/ambulancereg", async (req, res) => {
  try {
    const {  name,
      phone,
      state,
      district,
      pincode, } = req.body;
    console.log(req.body);
    const ambulance = new AmbulanceRegister({
      name,
      phone,
      state,
      district,
      pincode
    });
    await ambulance.save();
    console.log("Saved successfully");
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.post("/BedsRegis", async (req, res) => {
  try {
    const {     
       Name,
      Bed1,
      Bed2,
      Bed3,
      Bed4,
      Bed5,
      Bed6,
      Bed7,
      Bed8,
      Bed9,
      Bed10, } = req.body;
    console.log(req.body);
    const BedsRegis = new BedsSchema({
      Name,
      Bed1,
      Bed2,
      Bed3,
      Bed4,
      Bed5,
      Bed6,
      Bed7,
      Bed8,
      Bed9,
      Bed10,
    });
    await BedsRegis.save();
    console.log("Saved successfully");
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
app.get("/registerdoner", async (req, res) => {
  try {
    const registerdoner = await DonerRegisterSchema.find({});

    res.status(200).json(registerdoner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/Hospital", async (req, res) => {
  try {
    const Hospital = await HospitalRegister.find({});

    res.status(200).json(Hospital);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Hospital Login
app.post("/hospitallogin", async (req, res) => {
  try {
    const {email, password } = req.body;
    const login = await HospitalRegister.findOne({ email });
    if (!login || login.password !== password) {
      return res.status(401).json({ error: "invalid username or password" });
    }
    res.status(200).json({ message: login.toJSON() });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

app.post('/forgot-password', (req, res) => {
  const {email} = req.body;
  UserModel.findOne({email: email})
  .then(user => {
      if(!user) {
          return res.send({Status: "User not existed"})
      } 
      const token = jwt.sign({id: user._id}, "jwt_secret_key", {expiresIn: "1d"})
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'youremail@gmail.com',
            pass: 'your password'
          }
        });
        
        var mailOptions = {
          from: 'youremail@gmail.com',
          to: 'user email@gmail.com',
          subject: 'Reset Password Link',
          text: `http://localhost:3000/reset_password/${user._id}/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            return res.send({Status: "Success"})
          }
        });
  })
})
app.get("/Ambulance", async (req, res) => {
  try {
    const ambulance = await AmbulanceRegister.find({});

    res.status(200).json(ambulance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/BedsRegis", async (req, res) => {
  try {
    const ambulance = await BedsSchema.find({});

    res.status(200).json(ambulance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(Port, () => {
  console.log("server is listening");
});
