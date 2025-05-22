import errorsHelper from "../../helpers/errors.helper.js";
import connection from "../../db/getpool.js";
const main = async (user) =>{
    try {
        //conectarnos
        const pool = await connection();
        //ejecutar query
        const sqlQuery = 'INSERT INTO users (email,password) VALUES (?, ?)';
        const values = [user.email, user.password];
        const [response] = await pool.query(sqlQuery, values);
        
        if (response.affectedRows !== 1) {
            errorsHelper.conflictError('Error al insertar usuario', 'CREATE_USER_ERROR');
        }

        return response.insertId;
        
        //cerrar conexion
        pool.end();



    }catch (error) {
        errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
    }
}

export default main;