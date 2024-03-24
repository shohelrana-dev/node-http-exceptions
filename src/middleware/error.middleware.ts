import { NextFunction, Request, Response } from 'express'
import HttpException from '../exceptions/HttpException'
import httpStatus from '../utils/http-status'

/**
 * Middleware function to handle errors and send appropriate responses.
 *
 * @param error - The HttpException representing the error that occurred.
 * @param _ - Express Request object (unused in this middleware).
 * @param res - Express Response object for sending HTTP responses.
 * @param next - Express NextFunction for passing control to the next middleware.
 */
export default function errorMiddleware(
    error: HttpException,
    _: Request,
    res: Response,
    next: NextFunction
) {
    // Log the error to the console for debugging purposes.
    console.error(error)

    // Check if the error is an instance of HttpException and send a custom response.
    if (error instanceof HttpException) {
        return error.sendResponse(res)
    }

    // If the error is not an instance of HttpException, send a generic 500 Internal Server Error response.
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        // @ts-ignore: Ignore TypeScript error due to potential undefined property.
        message: 'Unexpected server error has occurred, Please try again.',
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    })
}
