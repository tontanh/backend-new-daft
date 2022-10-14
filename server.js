const express =require ("express");
const { config }  =require ("dotenv");
const dbConnect  =require ("./database/dbConnect.js");
const authRoutes  =require ("./routes/auth/auth.js");
const refreshTokenRoutes  =require ("./routes/auth/refreshToken.js");
const userRoutes  =require ("./routes/users.routes.js");
const swaggerUI  =require ("swagger-ui-express");
const swaggerDocumention  =require ("./docs/swagger.js");
const errors = require("./middleware/errors");
const app = express();
config();
dbConnect();

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumention));

app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);
app.use(errors.errorHandle);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));