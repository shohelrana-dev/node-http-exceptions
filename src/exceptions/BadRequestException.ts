import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the BadRequestException
const statusCode = httpStatus.BAD_REQUEST
const defaultMessage = `${statusCode} Bad request`

/**
 * Custom BadRequestException class extending HttpException.
 * This exception is used to represent HTTP 400 Bad Request errors.
 */
export default class BadRequestException extends HttpException {
    /**
     * Constructor for the BadRequestException class.
     *
     * @param {string} message - The error message for the exception (default: defaultMessage).
     * @param {object | undefined} properties - Additional properties for the exception (optional).
     */
    constructor(message = defaultMessage, properties?: object) {
        // Calling the constructor of the parent class (HttpException)
        super(statusCode, message, properties)

        // Setting the name of the exception
        this.name = 'BadRequestException'
    }
}
