const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");

app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`listening on port ${port}`))
  .catch(err => console.log(err));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log("Backend Started");
});
