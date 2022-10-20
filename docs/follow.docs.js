const status = {
  200: {
    description: "Successful Response",
  },
  400: {
    description: "User Error",
  },
  500: {
    description: "Internal Server Error",
  },
};
const secure = [
  {
    bearerAuth: [],
  },
];
const follow = {
  post: {
    tags: ["Follow"],
    summary: "user follow",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              scond_id: {
                type: "string",
                // description: "desce",
                example: "string",
              },
              status: {
                type: "string",
                // description: "desce",
                example: "string",
              },
            },
          },
        },
      },
    },
    responses: status,
    security: secure,
  },
};
const unfollow = {
  delete: {
    tags: ["Follow"],
    summary: "user unfollow",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              follow_id: {
                type: "string",
                // description: "desce",
                example: "string",
              },
            
            },
          },
        },
      },
    },
    responses: status,
    security: secure,
  },
};
const following = {
  get: {
    tags: ["Follow"],
    summary: "user following",
    security: secure,
    responses: status,
  },
};
module.exports = { follow, unfollow ,following};
