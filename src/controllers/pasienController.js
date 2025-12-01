const { Pasien, Dokter } = require("../../models");

module.exports = {
  async create(req, res) {
    try {
      const pasien = await Pasien.create(req.body);
      res.json({ message: "Pendaftaran berhasil", pasien });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },

  // async list(req, res) {
  //   const pasien = await Pasien.findAll({
  //     include: [{ model: Dokter }],
  //   });
  //   res.json(pasien);
  // },

  async list(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const { count, rows } = await Pasien.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
      });

      res.json({
        currentPage: page,
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        data: rows,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async update(req, res) {
    await Pasien.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Data pasien diperbarui" });
  },

  async delete(req, res) {
    await Pasien.destroy({ where: { id: req.params.id } });
    res.json({ message: "Data pasien dihapus" });
  },
};

exports.getPasien = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const { count, rows } = await Pasien.findAndCountAll({
    limit,
    offset,
    order: [["id", "DESC"]],
  });

  res.json({
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    data: rows,
  });
};
