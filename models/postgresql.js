import dotenv from "dotenv";
import pg from "pg";
const { Pool } = pg;

// generating env variables
dotenv.config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING
});

// export default pool;
export const query = async (text, params, callback) => {
  return await pool.query(text, params, callback);
};
