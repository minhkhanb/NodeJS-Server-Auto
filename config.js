module.exports = {
  apps : [
    {
      name      : "API",
      script    : "server.js",
      watch     : true,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development",
        "DB_NAME": "abc",
        "DB_USER": "root",
        "DB_PASS": "",
      },
      env_production : {
        "PORT": 3002,
        "NODE_ENV": "production",
        "DB_NAME": "abcxyz_pro",
        "DB_USER": "admin_pro",
        "DB_PASS": "654321",
      }
    },
  ],
}
