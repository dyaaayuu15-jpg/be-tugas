// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const header = req.headers.authorization;
//   if (!header) return res.status(401).json({ message: "Token tidak ada" });

//   const token = header.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, "secretkey");
//     req.admin = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token invalid" });
//   }
// };

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ message: "Token tidak ada" });

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "SECRET123");
    req.admin = decoded;
    next();
  } catch (e) {
    res.status(403).json({ message: "Token invalid" });
  }
};
