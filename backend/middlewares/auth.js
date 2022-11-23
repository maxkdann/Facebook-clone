const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    let tmp = req.header("Authorization");
    //slice bearer off of string
    const token = tmp ? tmp.slice(7, tmp.length) : "";
    if (!token) {
      //not authorized
      return res.status(400).json({ message: "Invalid Authentification" });
    }
    //extract the user id from the token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Authentification" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
