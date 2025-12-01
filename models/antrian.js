"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Antrian extends Model {
    static associate(models) {
      Antrian.belongsTo(models.Pasien, { foreignKey: "pasien_id" });
    }
  }
  Antrian.init(
    {
      pasien_id: DataTypes.INTEGER,
      nomor_antrian: DataTypes.INTEGER,
      status_antrian: DataTypes.STRING,
      tanggal: {
        type: DataTypes.DATEONLY,
        defaultValue: sequelize.NOW,
      },
    },
    {
      sequelize,
      modelName: "Antrian",
    }
  );
  return Antrian;
};
