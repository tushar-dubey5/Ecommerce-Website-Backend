const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth");
const productsRoute = require("./Routes/product");
const orderRoute = require("./Routes/order");
const cors = require("cors");

app.use(cors());
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`listening on port ${port}`))
  .catch(err => console.log(err));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);
app.use("/api/order", orderRoute);

app.listen(port, () => {
  console.log("Backend Started");
});
