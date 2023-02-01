module.exports = app => {
    const chat = require("../chatController.js");
  
    var router = require("express").Router();

    router.get("/dev2", chat.dev2);
    router.get("/dev1", chat.dev1);
    router.get("/text3", chat.text3);
    router.get("/cushman", chat.cushman);
    router.get("/google", chat.google);

    app.use('/api/chat', router);
  };