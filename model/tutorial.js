module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
      unique: true
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
    // topic , chapter , tech , stack 
    type: {
      type: Sequelize.STRING
    },
    parent: {
      type: Sequelize.STRING
    },
    stags: {
      type: Sequelize.STRING
    },
    shortcode: {
      type: Sequelize.STRING
    },
    docUrl: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }

  });

  return Tutorial;
};