module.exports = app => {
    const chap = require("../chapController.js");
  
    var router = require("express").Router();

    // Create a new chap
    router.post("/", chap.create);
  
    // Retrieve all chap with given tech parent 
    router.get("/", chap.findAll);
    // find all chaps given text for search
    router.get("/search", chap.searchChap);
  
    // Retrieve a single chap with id
    router.get("/:id", chap.findOne);
  
    // Update a chap with id
    router.put("/:id", chap.update);
  
    // Delete a chap with id
    router.delete("/:id", chap.delete);
  
    // Delete all chap
    router.delete("/", chap.deleteAll);

    app.use('/api/chap', router);
  };