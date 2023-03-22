module.exports = {
  port: process.env.PORT,
  connectionString: process.env.POSTGRES_CONNECTION_STRING + "ssl=true",
};
