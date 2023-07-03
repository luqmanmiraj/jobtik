const db = require("./model");
const Tutorial = db.chap;
const Op = db.Sequelize.Op;

// Create and Save a new chap
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
  // Create a Tutorial
  const tutorial = {
    name: req.body.name,
    parent_tech:req.body.parent_tech,
    shortcode:req.body.shortcode
    
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all chap whose parent tech is given
exports.findAll = (req, res) => {

  const tech = req.query.parent_tech;
  console.log("tech");
  console.log(tech)

  Tutorial.findAll({ where: {
    parent_tech: tech
  }
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving chap."
      });
    });
};
// Retrieve all chap whose text name matches
exports.searchChap = (req, res) => {

    const text = req.query.text;
    console.log("query search :: "+ text);
  
    Tutorial.findAll({ where: {
    name: { [Op.like]: `%${text}%`}

    }
    
     })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving chap."
        });
      });
  };
// Find a single chap with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);   
        
      } else {
        res.status(404).send({
          message: `Cannot find chap with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving chap with id=" + id
      });
    });
};

// Update a chap by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "chap was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update chap with id=${id}. Maybe chap was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a chap with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "chap was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete chap with id=${id}. Maybe chap was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete chap with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} chaps were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all chaps."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
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