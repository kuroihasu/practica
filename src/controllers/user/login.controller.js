import validateHelper from '../../helpers/validate.helper.js';
import schema  from '../../schemas/user/login.schema.js';
import userService from '../../services/user/index.service.js';


const main = async (req, res, next) => {
    try {
        //validar esquema
        await validateHelper(schema, req.body);
        //enviar datos al servicio
        const token = await userService.login(req.body);
        //enviar respuesta
        res.send(token);
    } catch (error) {
        next(error);
    }
}

export default main;