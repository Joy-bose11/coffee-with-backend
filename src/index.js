require("dotenv").config();
require("colors");
const app = require("./app");
const connectDB = require("./db");

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
  });
});
