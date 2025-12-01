const { Admin } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const admin = await Admin.findOne({
    where: { username: req.body.username },
  });

  if (!admin) return res.status(404).json({ message: "User tidak ditemukan" });

  const valid = await bcrypt.compare(req.body.password, admin.password);
  if (!valid) return res.status(400).json({ message: "Password salah" });

  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    "SECRET123",
    { expiresIn: "1d" }
  );

  res.json({ message: "Login berhasil", token });
};
