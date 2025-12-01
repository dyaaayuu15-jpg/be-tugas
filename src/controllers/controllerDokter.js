const { Dokter } = require("../../models");

module.exports = {
  async create(req, res) {
    try {
      const dokter = await Dokter.create(req.body);
      res.json({ message: "Dokter dibuat", dokter });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  async list(req, res) {
    const dokter = await Dokter.findAll();
    res.json(dokter);
  },

  async update(req, res) {
    const id = req.params.id;
    await Dokter.update(req.body, { where: { id } });
    res.json({ message: "Dokter diperbarui" });
  },

  async delete(req, res) {
    await Dokter.destroy({ where: { id: req.params.id } });
    res.json({ message: "Dokter dihapus" });
  },
};
