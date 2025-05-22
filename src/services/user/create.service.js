import errorsHelper from "../../helpers/errors.helper";

const main = async (user) =>{
    try {
        //conectarnos

    }catch (error) {
        errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
    }
}

export default main;