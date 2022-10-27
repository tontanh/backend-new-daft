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
const signup = {
  post: {
    tags: ["Auth"],
    summary: "user signup",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userName: {
                type: "string",
                // description: "desce",
                example: "string",
              },
              password: {
                type: "string",
                // description: "desce",
                example: "string",
              },
              email: {
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
  },
};
const login = {
  post: {
    tags: ["Auth"],
    summary: "user login",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                // description: "desce",
                example: "string",
              },
              password: {
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
  },
};
const logout = {
  delete: {
    tags: ["Auth"],
    summary: "user logout",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              refreshToken: {
                type: "string",
              },
            },
          },
        },
      },
    },
    responses: status,
  },
};
const refreshToken = {
  post: {
    tags: ["Auth"],
    summary: "refreshTokent",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              refreshToken: {
                type: "string",
              },
            },
          },
        },
      },
    },
    responses: status,
  },
};

const user_details = {
  get: {
    tags: ["User-info"],
    summary: "user profile",
    security: secure,
    responses: status,
  },
};
const user_profile_insert = {
  post: {
    tags: ["User-info"],
    summary: "user insert",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              firstname: {
                example: "string",
              },
              lastname: {
                type: "String",
                example: "string",
              },
              birthday: {
                type: "Date",
                example: "string",
              },
              gender: {
                type: "String",
                example: "string",
              },
              tell: {
                type: "Number",
                example: "Number",
              },
              imgurl: {
                type: "String",
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
const user_profile_update = {
  put: {
    tags: ["User-info"],
    summary: "user update",
    description: "you can update one or all",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              string: {
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
const update_image_profile = {
  put: {
    tags: ["User-info"],
    summary: "user update profile",
    // description: "you can update one or all",
    requestBody: {
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              imgurl: {
                type: "string",
                format: "binary",
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
const user_findAll = {
  get: {
    tags: ["User-info"],
    summary: "search user",
    parameters: [
      {
        in: "query",
        name: "search",
        schema: {
          type: "string",
          properties: {
            text: {
              example: "name or lastname",
            },
          },
        },
      },
    ],
    security: secure,
    responses: status,
  },
};
module.exports = {
  signup,
  update_image_profile,
  user_profile_update,
  user_details,
  refreshToken,
  logout,
  login,
  user_profile_insert,
  user_findAll,
};
