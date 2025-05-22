import validateHelper from '../../helpers/validate.helper.js';
import schema  from '../../schemas/user/create.schema.js';
import userService from '../../services/user/create.service.js';

const main = async (req, res, next) => {
    try {
        //validar esquema
        await validateHelper(schema, req.body);
        //enviar datos al servicio
        await userService(req.body);
        //enviar respuesta
        res.send('Usuario creado correctamente');
    } catch (error) {
        next(error);
    }
}

export default main;