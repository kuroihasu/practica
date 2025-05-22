import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const {MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE} = process.env;

let pool

const main = async () => {
    try{
        if (!pool) {
            const poolTemp = await mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
            });
            await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}`);
            
             pool = mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
                connectionLimit: 10,
                timezone: 'Z'
            });
        }
        return pool;
    } catch (error) {
       console.error(error);
    }

}

export default main