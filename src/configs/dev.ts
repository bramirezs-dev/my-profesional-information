import { dbConfigMongo } from "src/modules/database/interfaces/dbConfigMongo";

export default () => ({
    port:5007,
    mongodbConfig: {
        host: 'localhost:27017',
        port: 27017,
        database: 'profesional_information',
      },
})