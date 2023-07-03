module.exports = (sequelize, Sequelize) => {
    const chap = sequelize.define("chaps", {
      name: {
        type: Sequelize.STRING,
        unique: true
      },

      shortcode: {
        type: Sequelize.STRING
      },

      parent_tech: {
        type: Sequelize.STRING
      }
    
  
    });
  
    return chap;
  };