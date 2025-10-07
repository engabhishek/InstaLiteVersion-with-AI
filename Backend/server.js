require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/DB/db");

connectDb();
app.listen(3000, (req, res) => {
  console.log("serve is running on port no. 3000.....");
});
