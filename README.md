# An almost simple server in Express.js

This project will allow you to practice setting up a server that will handle simple requests in Express.js.

## What you will be doing

You will be setting up a server with four **endpoints** using the Express.js framework.

The endpoints will only respond to **GET** requests, and send a **string** as a response.

## Tasks

### Task 1 - Getting ready

1. Install the express.js npm package `npm i express`.
2. Create a file for your server (`server.js`).

### Task 2 - Setting up your server

From the [SNIPPETS](/SNIPPETS.md) file use the snippet **starter code** to initialise your `server.js` file.

### Task 3 - Add a GET request to '/hello'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/hello`.
2. This middleware should send a **response** with a greeting message of your choice.

### Task 4 - Add a GET request to '/time'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/time`.
2. This middleware should return a `response` with the current time and date in [ISO format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) (`2011-10-05T14:48:00.000Z`).


> Research:
> 
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
> 
> [Date Object [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Task 5 - Add a GET request to '/random'

1. Using the snippet **GET request**, build an endpoint that will respond to the path `/random`.
2. This middleware should send a **response** with the random number.

> Research:
>
> [Math.random() [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Task 6 - Add a GET request to '/isNumber'

1. Using the snippet **GET request**, write some middleware that will respond to the path `/isNumber`.
2. Using either **request parameters** or **query parameters**, read a parameter which could be sent as part of the URL. This parameter will contain a value.

   > Hint: Request parameters can be read with the `request.params` object.
   > 
   > Hint: Query parameters can be read with the `request.query` object.

3. Reading the value from the parameter, check that it can be converted to a number
   
   > Hint: You can use either the Math function `Number()` or the `isNaN()` function to see if the value can be converted to a number.

4. If it can be converted to a number, then send a **response** with the message:
   - **"This is a number"**

5. If it can not be converted to a number, then send a **response** with the message:
   - **"This is not a number"**
   
> Research:
>
> [Number() [english]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [Number() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
> 
> [isNaN() [english]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
> 
> [isNaN() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)