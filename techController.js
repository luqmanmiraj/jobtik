const db = require("./model");
const Tech = db.tech;
const Op = db.Sequelize.Op;

// Create and Save a new tech
exports.create = (req, res) => {





  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
console.log("req.body")
console.log(req.body)
  // Create a Tech
  const tutorial = {
    name: req.body.name,
    sortorder:req.body.sortorder,
    shortcode:req.body.shortcode
    
  };

  // Save Tech in the database
  Tech.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tech."
      });
    });
};

// Retrieve all tech
exports.findAll = (req, res) => {

  const tech = req.query.parent_tech;
  console.log("tech");
  console.log(tech)

  Tech.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving techs."
      });
    });
};
// Retrieve all tech whose text name matches
exports.searchTech = (req, res) => {

    const text = req.query.text;
    console.log("query search :: "+ text);
  
    Tech.findAll({ where: {
    name: { [Op.like]: `%${text}%`}

    }
    
     })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tech."
        });
      });
  };
// Find a single tech with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tech.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);   
        
      } else {
        res.status(404).send({
          message: `Cannot find tech with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tech with id=" + id
      });
    });
};

// Update a tech by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tech.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tech was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update tech with id=${id}. Maybe tech was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tech with id=" + id
      });
    });
};

// Delete a tech with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tech.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tech was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete tech with id=${id}. Maybe tech was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tech with id=" + id
      });
    });
};

// Delete all Techs from the database.
exports.deleteAll = (req, res) => {
  Tech.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} techs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all techs."
      });
    });
};

// Find all published Techs
exports.findAllPublished = (req, res) => {
  Tech.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};