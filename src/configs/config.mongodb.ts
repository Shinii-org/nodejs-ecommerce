// level 0

// const config = {
//   app: {
//     port: 3000
//   },
//   db: {
//     host: 'localhost',
//     port: 27017,
//     name: 'db'
//   }
//
// }

// level 1

const dev = {
  app: {
    port: 3000,
  },
  db: {
    host: "localhost",
    port: 27017,
    name: "db",
  },
};

const prod = {
  app: {
    port: 3000,
  },
  db: {
    host: "localhost",
    port: 27017,
    name: "db",
  },
};

const config = { dev, prod };
const env = (process.env.NODE_ENV as "dev" | "prod") ?? "dev";

export default config[env];
