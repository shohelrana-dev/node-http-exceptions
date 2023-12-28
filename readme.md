# node http exception library

## Features

1. **Common HTTP error:** Handle common HTTP error with dedicated exception classes.
2. **httpStatus:** This appears to be a utility module that provides HTTP status codes. It might be used to standardize the status codes in your application.
3. **errorMiddleware:** This is likely a middleware function for handling errors in an Express.js or similar web server. It might be used to catch and process errors in the request-response cycle.
4. **notFoundMiddleware:** This is another middleware function designed to handle requests for routes that are not defined (404 Not Found).
5. **HttpException:** This seems to be a base class for HTTP exceptions. It might be extended for specific HTTP error cases.
6. **TypeScript Support:** The package is TypeScript supported, meaning it includes type definitions that enhance the development experience.


To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save node-http-exceptions
    $ yarn add node-http-exceptions

## Examples

Here is simple example:

```js
import { Router } from 'express'
const { UnauthorizedException, BadRequestException, UnprocessableEntityException } = require( 'node-http-exceptions')

const routes = Router()

routes.post('/tasks', function (req, res, next) {
  try{
    if (!req.user){
        throw new UnauthorizedException('You are unauthorized.')
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

  }catch(err){
    throw new UnprocessableEntityException( 'Please fills all required fields.', {
      errors: { name: 'Name should not be empty.' }
    } )

    next(err)
  }
})
```

Handle error using middleware:

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

Use base HttpException

```js
const { HttpException, httpStatus } = require( 'node-http-exceptions')
const express = require('express')

const app = express()

app.post('/tasks', function (req, res, next) {
  try{
    if (!req.user){
        throw new HttpException(httpStatus.UNAUTHORIZED, 'You are unauthorized.')
    }

    //do something

  }catch(err){
    next(err)
  }
})
```

## The httpStatus object

Note that the `node-http-exceptions` also imports a httpStatus object:

```js
import { httpStatus } from 'node-http-exceptions'

console.log(httpStatus.OK) // Output: 200
console.log(httpStatus.NOT_FOUND) // Output: 404
```

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
