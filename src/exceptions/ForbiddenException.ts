import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the ForbiddenException
const statusCode = httpStatus.FORBIDDEN
const defaultMessage = `${statusCode} Forbidden`

/**
 * Custom ForbiddenException class extending HttpException.
 * This exception is used to represent HTTP 403 Forbidden errors.
 */
export default class ForbiddenException extends HttpException {
    /**
     * Constructor for ForbiddenException.
     * @param {string} message - The error message for the exception. Default is defaultMessage.
     * @param {object | undefined} properties - Additional properties to include in the exception.
     */
    constructor(message: string = defaultMessage, properties?: object) {
        // Call the constructor of the base class (HttpException)
        super(statusCode, message, properties)

        // Set the name of the exception
        this.name = 'ForbiddenException'
    }
}
