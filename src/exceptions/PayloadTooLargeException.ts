import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the PayloadTooLargeException
const statusCode = httpStatus.PAYLOAD_TOO_LARGE
const defaultMessage = `${statusCode} Payload too large`

/**
 * Custom exception class for handling HTTP 413 Payload Too Large errors.
 * Extends the base HttpException class.
 */
export default class PayloadTooLargeException extends HttpException {
    /**
     * Constructor for PayloadTooLargeException.
     *
     * @param message - Optional. Custom error message for the exception. Defaults to a standard message.
     * @param properties - Optional. Additional properties to attach to the exception.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Call the constructor of the parent class (HttpException)
        super(statusCode, message, properties)

        // Set the name of the exception for identification
        this.name = 'PayloadTooLargeException'
    }
}
