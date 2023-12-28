import { Response } from 'express'

/**
 * HTTP exception class
 */
export default class HttpException extends Error {
    // HTTP status code for the exception
    protected statusCode: number

    // Additional properties associated with the exception
    protected properties: object

    /**
     * Creates an instance of the HttpException class.
     *
     * @param {number} statusCode - HTTP status code
     * @param {string} message - error message
     * @param {object} properties - Additional properties
     */
    constructor(statusCode: number, message: string, properties?: object) {
        super(message)
        this.statusCode = statusCode
        this.name = 'HttpException'

        if (typeof properties === 'object') {
            this.properties = properties
        } else {
            this.properties = {}
        }
    }

    /**
     * Method to send a JSON response with error details.
     *
     * @param {Response} res - express response object
     */
    public sendResponse(res: Response) {
        return res.status(this.statusCode).json({
            message: this.message ?? 'Something went wrong, Please try again',
            statusCode: this.statusCode,
            ...this.properties,
        })
    }
}
