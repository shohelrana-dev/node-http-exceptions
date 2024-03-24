import httpStatus from '../utils/http-status'
import HttpException from './HttpException'

// Storing the status code and Default message for the TooManyRequestException
const statusCode = httpStatus.TOO_MANY_REQUESTS
const defaultMessage = `${statusCode} Too many request`

/**
 * Custom TooManyRequestException class extending HttpException.
 * This exception is used to represent HTTP 429 TOO_MANY_REQUESTS errors.
 */
export default class TooManyRequestException extends HttpException {
    /**
     * Constructor for the TooManyRequestException class.
     * @param message - The error message (default is the predefined message).
     * @param properties - Additional properties to include in the error response.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Calling the constructor of the parent class (HttpException)
        super(statusCode, message, properties)

        // Setting the name of the exception
        this.name = 'TooManyRequestException'
    }
}
