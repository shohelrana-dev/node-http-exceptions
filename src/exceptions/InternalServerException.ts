import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the InternalServerException
const statusCode = httpStatus.INTERNAL_SERVER_ERROR
const defaultMessage = `${statusCode} Internal Server Error`

/**
 * Custom exception class for representing internal server errors.
 * Extends the HttpException class.
 */
export default class InternalServerException extends HttpException {
    /**
     * Constructor for InternalServerException.
     * @param {string} message - The error message. Defaults to defaultMessage if not provided.
     * @param {object} properties - Additional properties to be attached to the exception.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Call the constructor of the parent class (HttpException)
        super(statusCode, message, properties)

        // Set the name of the exception
        this.name = 'InternalServerException'
    }
}
