import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the UnauthorizedException
const statusCode = httpStatus.UNAUTHORIZED
const defaultMessage = `${statusCode} Unauthorized`

/**
 * Custom exception class for unauthorized access.
 * Extends the HttpException class.
 */
export default class UnauthorizedException extends HttpException {
    /**
     * Constructor for UnauthorizedException.
     * @param message - Optional. The error message for the exception. Defaults to the default message.
     * @param properties - Optional. Additional properties to be attached to the exception.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Call the constructor of the parent class (HttpException) with appropriate parameters.
        super(statusCode, message, properties)

        // Set the name of the exception for identification purposes.
        this.name = 'UnauthorizedException'
    }
}
