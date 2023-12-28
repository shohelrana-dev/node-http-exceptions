import HttpException from './HttpException'
import httpStatus from '../utils/http-status'

// Storing the status code and Default message for the NotFoundException
const statusCode = httpStatus.NOT_FOUND
const defaultMessage = `${statusCode} Not found`

export default class NotFoundException extends HttpException {
    constructor(message = defaultMessage, properties?: object) {
        super(statusCode, message, properties)
        this.name = 'NotFoundException'
    }
}
