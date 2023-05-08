module.exports = {
    HOST: "containers-us-west-60.railway.app",
    USER: "root",
    PASSWORD: "1JzgeNMAK0X1osglaaWS",
    DB: "railway",
    dialect: "mysql",
    port: 6508,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};