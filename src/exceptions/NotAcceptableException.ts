import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the NotAcceptableException
const statusCode = httpStatus.NOT_ACCEPTABLE
const defaultMessage = `${statusCode} Not Acceptable`

/**
 * `NotAcceptableException` class represents an HTTP exception with a status code of 406 Not Acceptable.
 * It extends the `HttpException` class.
 */
export default class NotAcceptableException extends HttpException {
    /**
     * Constructor for `NotAcceptableException` class.
     *
     * @param {string} message - The error message associated with the exception. Defaults to a generic message.
     * @param {object} properties - Additional properties that can be attached to the exception.
     */
    constructor(message = defaultMessage, properties?: object) {
        // Call the constructor of the parent class `HttpException` with appropriate parameters.
        super(statusCode, message, properties)

        // Set the name of the exception for better identification.
        this.name = 'NotAcceptableException'
    }
}
