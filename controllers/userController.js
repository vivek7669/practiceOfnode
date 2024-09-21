const user = require("../models/usershema");
const multer = require("multer");
const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: Storage });

const getAlluser = async (req, res) => {
  let data = await user.find();
  res.send(data);
};

const createUser = async (req, res) => {
  try {
    let { email } = req.body;
    let chdata = await user.findOne({ email });

    if (chdata) {
     res.render('signup', { msg: "User Already Exists" });
    } else {
      req.body.img = req?.files.map((elm) => elm?.path);
      let data = await user.create(req.body);
      
      res.send({ data });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAlluser, createUser, upload };
