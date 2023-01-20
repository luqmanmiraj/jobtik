module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      html: {
        type: Sequelize.TEXT('long'),
        
      },
      tech: {
        type: Sequelize.STRING
      },
      shortcode: {
        type: Sequelize.STRING
      },
      
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };