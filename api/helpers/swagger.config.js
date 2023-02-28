module.exports = swaggerConfig =  {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'store  API',
      version: '1.0.0',
      description: 'sotre api using Node.js, Express, and Mongoose.',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'virus24',
        url: 'https://github.com/virgel199',
        email: 'kazouya25@gmail.com',
      },
    },
    basePath: '/',
    servers: [
      {
        url: 'http://localhost:3000/',
				name: 'Server1'
      }, {
        url: 'http://localhost:5000/',
				name: 'Server2'
      },
    ],
  },
  tags: [
    {
      "name": "User",
      "description": "API for users"
    }
  ],
  apis: [
    "api/models/*.js",
    "api/helpers/*.js",
    "api/controllers/user/*.js",
    "api/middleware/*.js",
    "api/routes/*.js"
  ]
};