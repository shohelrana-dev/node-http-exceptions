import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the ServiceUnavailableException
const statusCode = httpStatus.SERVICE_UNAVAILABLE
const defaultMessage = `${statusCode} Service unavailable`

export default class ServiceUnavailableException extends HttpException {
    constructor(message = defaultMessage, properties?: object) {
        super(statusCode, message, properties)
        this.name = 'ServiceUnavailableException'
    }
}
