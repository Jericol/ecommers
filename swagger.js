const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "clon de chat de node.js",
            version: "0.0.9",
            description: "API para aplicacion de ecommers"
        }
    }
};

const swaggerSpec = swaggerJsDoc(options);

const swagerDocs = (app, port) =>{
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}