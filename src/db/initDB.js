import getPool from "./getpool.js";


const main = async () => {
    const pool = await getPool();
    console.log('Borrando tablas...');
    await pool.query("DROP TABLE IF EXISTS notes, users");

    console.log('Creando tablas...');
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT  UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
        )`
    );

    await pool.query(`
        CREATE TABLE IF NOT EXISTS categories (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) UNIQUE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
        )`
    );

    await pool.query(`
        CREATE TABLE IF NOT EXISTS notes (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(50) NOT NULL,
            text TEXT NOT NULL,
            userId INT UNSIGNED NOT NULL,
            categoryId INT UNSIGNED NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`
    );

    

    console.log('Tablas creadas!!')



}
main();