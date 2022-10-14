const userDocs =require( "./user.docs.js");

const swaggerDocumention = {
  openapi: "3.0.0",
  // swagger: "2.0.0",
  info: {
    version: "1.0.0",
    title: "Document API",
    description: "mongodb + nodejs + socket.io",
  },
  servers: [
    {
      url: "http://localhost:5501",
      description: "Link API",
    },
  ],
  schemes: ["http", "https"],
  tags: [
    {
      name: "Auth",
      description: "authorization",
    },
    {
      name: "User-info",
      description: "User - information",
    },
    {
      name: "Message",
      description: "Message + Socket.io",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: userDocs.userDocs,
};
module.exports= swaggerDocumention;
