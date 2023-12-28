import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the UnprocessableEntityException
const statusCode = httpStatus.UNSUPPORTED_MEDIA_TYPE
const defaultMessage = `${statusCode} Unsupported media type`

/**
 * Custom exception class for representing Unsupported Media Type errors.
 * Extends the base HttpException class.
 */
export default class UnsupportedMediaTypeException extends HttpException {
    /**
     * Constructor for the UnsupportedMediaTypeException class.
     *
     * @param message - Optional. Custom error message. Defaults to 'Unprocessable Entity'.
     * @param properties - Optional. Additional properties to include in the error response.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Call the constructor of the base class (HttpException) with appropriate parameters
        super(statusCode, message, properties)

        // Set the name of the exception for identification
        this.name = 'UnsupportedMediaTypeException'
    }
}
