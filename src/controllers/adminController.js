const { Admin } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(req, res) {
    try {
      const { username, password } = req.body;

      const hashed = await bcrypt.hash(password, 10);

      const admin = await Admin.create({
        username,
        password: hashed,
      });

      res.json({ message: "Admin berhasil dibuat", admin });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const admin = await Admin.findOne({ where: { username } });
      if (!admin)
        return res.status(404).json({ message: "Admin tidak ditemukan" });
      const match = await bcrypt.compare(password, admin.password);
      if (!match) return res.status(401).json({ message: "Password salah" });
      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        "secretkey",
        { expiresIn: "1d" }
      );
      res.json({ message: "Login berhasil", token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
