import mysql, { Pool } from "mysql2";

const database: Pool = mysql.createPool({
  host: process.env.MYSQL_HOST as string,
  user: process.env.MYSQL_USERNAME as string,
  password: process.env.MYSQL_PASSWORD as string,
  database: process.env.MYSQL_DB as string,
  connectionLimit: 10,
  multipleStatements: true,
});

const crateTableQuery = `CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(225) NOT NULL,
  content TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW())`;

async function excQuery(query: string = crateTableQuery): Promise<any> {
  return new Promise(async (resolve, reject) => {
    database.query(query, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

export default excQuery;
