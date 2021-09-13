module.exports = {
    HOST: "localhost",
    USER: "user123",
    PASSWORD: "123456",
    DB: "socialnetwork",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };