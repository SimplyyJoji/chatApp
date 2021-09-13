const express = require("express");
const cors = require("cors");

// Environment vars.
const port = 5000;
const db_name = "fakeApp";
const io = require('socket.io')(server, { cors: true });
// Immediately execute the import mongoose.config.js function.
require("../config/mongoose.config")(db_name);

const app = express();

app.use(express.json());
app.use(cors());

require("../routes/message.routes")(app);

io.on("connection", socket => {
  console.log(socket.id);
  //if this logs then a client has been successfully added


});

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);

