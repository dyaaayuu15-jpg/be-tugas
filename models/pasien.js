"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    static associate(models) {
      Pasien.belongsTo(models.Dokter, { foreignKey: "dokter_id" });
      Pasien.hasOne(models.Antrian, { foreignKey: "pasien_id" });
    }
  }
  Pasien.init(
    {
      no_identitas: DataTypes.STRING,
      nama_pasien: DataTypes.STRING,
      jenis_kelamin: DataTypes.STRING,
      usia: DataTypes.INTEGER,
      alamat: DataTypes.STRING,
      keluhan: DataTypes.STRING,
      dokter_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pasien",
    }
  );
  return Pasien;
};
