module.exports = app => {
    const tech = require("../techController.js");
  
    var router = require("express").Router();

    // Create a new tech
    router.post("/", tech.create);
  
    // Retrieve all techs
    router.get("/", tech.findAll);
    // find all techs given text for search
    router.get("/search", tech.searchTech);
  
    // Retrieve a single tech with id
    router.get("/:id", tech.findOne);
  
    // Update a tech with id
    router.put("/:id", tech.update);
  
    // Delete a tech with id
    router.delete("/:id", tech.delete);
  
    // Delete all tech
    router.delete("/", tech.deleteAll);

    app.use('/api/tech', router);
  };