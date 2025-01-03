// const { Sequelize } = require('sequelize');
// require('dotenv').config();


// const sequelize = new Sequelize(
//   "RegisterKaro",
//   "postgres",
//   "happy",
//   {
//     host: "localhost",
//     port: 5432,
//     dialect: "postgres",
//     logging: false, 
//   }
// );

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connection established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

// export default sequelize;



import { Pool } from 'pg';

const pool = new Pool({
  connectionString: "postgresql://postgres.svrjovdqjxllzsphgjpw:{happy77@]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres",
});

export const query = async (text, params) => {
  const res = await pool.query(text, params);
  return res.rows;
};
