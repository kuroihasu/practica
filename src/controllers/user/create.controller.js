import validateHelper from '../../helpers/validate.helper.js';
import schema  from '../../schemas/user/create.schema.js';

const main = async (req, res, next) => {
    try {
        //validar esquema
        await validateHelper(schema, req.body);

        //valid
        //enviar datos
        //enviar respuesta
    } catch (error) {
        next(error);
    }
}

export default main;