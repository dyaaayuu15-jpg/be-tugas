const { Antrian, Pasien } = require("../../models");

module.exports = {
  async buatAntrian(req, res) {
    try {
      const today = new Date().toISOString().slice(0, 10);

      const last = await Antrian.findOne({
        where: { tanggal: today },
        order: [["nomor_antrian", "DESC"]],
      });

      const nomorBaru = last ? last.nomor_antrian + 1 : 1;
      const pasienBaru = await Pasien.create({
        nama_pasien: req.body.nama_pasien,
      });

      const newQueue = await Antrian.create({
        pasien_id: pasienBaru.id,
        nomor_antrian: nomorBaru,
        tanggal: today,
      });
      res.json({
        message: "Antrian berhasil ditambahkan",
        data: newQueue,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Terjadi kesalahan", error: error.message });
    }
  },
  async list(req, res) {
    const antrian = await Antrian.findAll({
      include: [{ model: Pasien }],
    });
    res.json(antrian);
  },

  async updateStatus(req, res) {
    await Antrian.update(
      { status_antrian: req.body.status_antrian },
      { where: { id: req.params.id } }
    );
    res.json({ message: "Status antrian diperbarui" });
  },

  async getTodayQueue(req, res) {
    const today = new Date().toISOString().slice(0, 10);

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { rows, count } = await Antrian.findAndCountAll({
      where: { tanggal: today },
      limit,
      offset,
      order: [["nomor_antrian", "ASC"]],
    });

    res.json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows,
    });
  },
};
