const  { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    github: {
      type: DataTypes.STRING,
      allowNull: false
    },

    deploy: {
      type: DataTypes.STRING,
      allowNull: true
    },

    images: {
      type: DataTypes.STRING,
      allowNull: false
    },

    videos: {
      type: DataTypes.STRING,
      allowNull: true
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    comment_section: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}