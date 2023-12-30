# Streamlined Node.js HTTP Exception Handling with `node-http-exceptions`

## Key Features:

- **Structured HTTP Exception Classes:** Dedicated classes for common HTTP errors (`BadRequestException`, `UnauthorizedException`, `NotFoundException`, etc.) promote code organization and consistency.
- **Centralized HTTP Status Codes:** The `httpStatus` module provides easy access to standard HTTP status codes, enhancing code readability and maintainability.
- **Error Handling Middleware:** `errorMiddleware` and `notFoundMiddleware` facilitate centralized error management, simplifying error handling logic and ensuring appropriate responses.
- **Flexible Base Class:** The `HttpException` class allows for custom exception creation with specific status codes and messages, enabling tailored error handling.
- **Informative Default Messages:** Common error cases have default messages, but customizable messages enable more informative and user-friendly responses.
- **TypeScript Support:** Ensure type definitions for all modules and classes to enhance code completion, type checking, and overall development experience.


#### Installation:

    $ npm install --save node-http-exceptions
    $ yarn add node-http-exceptions

## Usage Examples:

Here is simple example:

```js
import { Router } from 'express'
const { UnauthorizedException, BadRequestException, UnprocessableEntityException } = require( 'node-http-exceptions')

const routes = Router()

routes.post('/tasks', function (req, res, next) {
    if (!req.user){
        throw new UnauthorizedException() //default message will be shown '401 Unauthorized'
    }

    if ( !req.body ) ) {
        throw new BadRequestException( 'Task data is empty' )
    }

    if ( !req.body.name ) {
        throw new UnprocessableEntityException( 'Please fills all required fields.', {
          errors: { name: 'Name should not be empty.' }
        } )
    }

    //create task
})
```

### Centralized Error Handling with Middleware::

```js
const { errorMiddleware, notFoundMiddleware } = require( 'node-http-exceptions')
const express = require('express')
const routes = require('./src/routes')

const app = express()

app.use(routes)

//handle errors
app.use(notFoundMiddleware)
app.use(errorMiddleware)
```

### Use base HttpException

```js
const { HttpException, httpStatus } = require( 'node-http-exceptions')
const express = require('express')

const app = express()

app.post('/tasks', function (req, res, next) {
    if (!req.user){
        throw new HttpException(httpStatus.UNAUTHORIZED, 'You are unauthorized.')
    }

    //do something
})
```

### The `httpStatus` object

Note that the `node-http-exceptions` also imports a httpStatus object:

```js
import { httpStatus } from 'node-http-exceptions'

console.log(httpStatus.OK) // Output: 200
console.log(httpStatus.NOT_FOUND) // Output: 404
```

## Benefits:

- **Improved Code Organization:** Dedicated exception classes and centralized status codes enhance code readability and maintainability.
- **Simplified Error Handling:** Middleware simplifies error management and ensures consistent responses.
- **Customizable Error Messages:** Tailor error messages to provide more informative feedback to users.
- **TypeScript Support:** Enhance development experience with type checking and code completion.

## Which exception classes this package provides?

`node-http-exceptions` provides a set of exception classes that inherit from the base HttpException.
These classes represent many of the most common HTTP exceptions:

- **BadRequestException**
- **UnauthorizedException**
- **NotFoundException**
- **ForbiddenException**
- **NotAcceptableException**
- **RequestTimeoutException**
- **ConflictException**
- **PayloadTooLargeException**
- **UnsupportedMediaTypeException**
- **UnprocessableEntityException**
- **InternalServerErrorException**
- **ServiceUnavailableException**
