const conflictError = (msg, code = 'CONFLICT') =>{
    let err = new Error();
    err.code = code;
    err.httpstatus = 409;
    err.message = msg
    throw err;
}

const notFoundError = (msg, code = 'NOT_FOUND') =>{
    let err = new Error();
    err.code = code;
    err.httpstatus = 404;
    err.message = msg
    throw err;
}

const notAuthorizedError = (msg, code = 'UNAUTHORIZED') =>{
    let err = new Error();
    err.code = code;
    err.httpstatus = 401;
    err.message = msg
    throw err;
}

const forbiddenError = (msg, code = 'FORBIDDEN') =>{
    let err = new Error();
    err.code = code;
    err.httpstatus = 403;
    err.message = msg
    throw err;
}

const internalServerError = (msg, code = 'INTERNAL_SERVER_ERROR') =>{
    let err = new Error();
    err.code = code;
    err.httpstatus = 500;
    err.message = msg
    throw err;
}

const badRequestError = (msg, code = 'BAD_REQUEST_ERROR') =>{
    let err = new Error();
    err.code = code;
    err.httpstatus = 400;
    err.message = msg
    throw err;
}

const schemaValidatorError = (msg = 'Error en la validacion de los datos') =>{
    badRequestError(msg);
}

export default {
    badRequestError,
    notFoundError,
    notAuthorizedError,
    forbiddenError,
    internalServerError,
    schemaValidatorError
}
