const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dificultad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duracion:{
        type: DataTypes.FLOAT,

    },
    temporada:{
        type: DataTypes.ENUM('Summer', 'Autumn','Winter', 'Spring'),
        allowNull: false,
    },
 },
  {timestamps: false}
 )};