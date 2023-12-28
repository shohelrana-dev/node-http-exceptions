import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the RequestTimeoutException
const statusCode = httpStatus.REQUEST_TIMEOUT
const defaultMessage = `${statusCode} Request timeout`

/**
 * RequestTimeoutException class represents an exception for HTTP request timeouts.
 * It extends the HttpException class to handle HTTP-related exceptions.
 */
export default class RequestTimeoutException extends HttpException {
    /**
     * Constructor for the RequestTimeoutException class.
     * @param message The error message for the exception. Defaults to defaultMessage.
     * @param properties Additional properties to include in the exception. Optional.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Call the constructor of the parent class (HttpException) with appropriate parameters.
        super(statusCode, message, properties)

        // Set the name of the exception for identification purposes.
        this.name = 'RequestTimeoutException'
    }
}
