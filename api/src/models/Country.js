const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    subregion:{
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.STRING,
      
    },
    poblacion:{
      type: DataTypes.STRING,
      allowNull: false,
    },},
    {timestamps: false}
    )};
  
