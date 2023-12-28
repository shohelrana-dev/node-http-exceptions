import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the ConflictException
const statusCode = httpStatus.CONFLICT
const defaultMessage = `${statusCode} Conflict`

/**
 * Custom ConflictException class extending HttpException.
 * This exception is used to represent HTTP 409 Conflict errors.
 */
export default class ConflictException extends HttpException {
    /**
     * Constructor for the ConflictException class.
     * @param message - The error message (default is the predefined message).
     * @param properties - Additional properties to include in the error response.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Calling the constructor of the parent class (HttpException)
        super(statusCode, message, properties);

        // Setting the name of the exception
        this.name = 'ConflictException';
    }
}
