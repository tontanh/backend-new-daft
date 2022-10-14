const express = require("express");
const mongoose = require("mongoose");
const dbConfidg = require("./config/db.config");
const auth = require("./middlewares/auth");
const errors = require("./middlewares/errors");
const { unless } = require("express-unless");
const app = express();
const port = process.env.port || 4000;
const router = require("./routes/users.routes");
const routerBlog = require("./routes/blogs.routes");
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfidg.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database can't be connected" + error);
    }
  );
auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
      { url: /^\/public\/uploads\/.*/, methods: ["GET", "POST"] },
      { url: /^\/public\/avatar\/.*/, methods: ["GET", "POST"] },
    ],
  })
);
app.use("/public/uploads", express.static("public/uploads"));
app.use("/public/avatar", express.static("public/avatar"));
app.use(express.json());
app.use("/users", router);
app.use("/blog", routerBlog);
app.use(errors.errorHandle);
app.listen(port, function () {
  console.log("Ready to Go! on port " + port);
});
