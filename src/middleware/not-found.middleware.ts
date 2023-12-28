//dependencies
import { Request, Response, NextFunction } from 'express'
import NotFoundException from "../exceptions/NotFoundException"

/**
 * Middleware for handling 404 Not Found errors.
 * 
 * @param _: Express Request object (unused)
 * @param __: Express Response object (unused)
 * @param next: Express NextFunction to pass control to the next middleware
 */
export default async function notFoundMiddleware( _: Request, __: Response, next: NextFunction ) {
    return next( new NotFoundException( 'The route is not available.' ) )
}