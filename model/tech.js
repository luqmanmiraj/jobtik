module.exports = (sequelize, Sequelize) => {
    const tech = sequelize.define("tech", {
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      shortcode: {
        type: Sequelize.STRING,
      },
      sortorder:{
        type:Sequelize.INTEGER
      }
    });
    return tech;
  };