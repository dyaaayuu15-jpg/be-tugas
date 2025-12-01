"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    static associate(models) {
      Dokter.hasMany(models.Pasien, { foreignKey: "dokter_id" });
    }
  }
  Dokter.init(
    {
      nama_dokter: DataTypes.STRING,
      spesialis: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dokter",
    }
  );
  return Dokter;
};
