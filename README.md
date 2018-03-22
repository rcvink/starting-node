# Starting node

This project was created to document my efforts to learn the following:
- how to create full stack Node.js apps;
- how to TDD those apps;
- how to transpile ES6; and
- how to deploy those apps with dependencies.

## Getting started

This repository does not serve much purpose for anyone besides myself, but if you want to see what I've done, go ahead!

Assuming you have Node.js and npm available in your development environment,
1. `git clone` this repository.
1. `npm install` to install dependencies.
1. `npm test` to run tests.
1. `npm start` to transpile to ES6 and host on port 3000.
1. Navigate to http://localhost:3000/ to see the results!

## Process
1. Used `express-generator` to create a skeleton.
1. Added and configured babel for transpilation.
1. Added jasmine for testing.

## Decisions

1. Node.js: I wanted to learn how to use it, and because FT use it.
1. Express.js: minimal and flexible and can easily be used with any ORM.
1. Code written to ES6 standards to ensure futureproofing and for nicer syntax.
1. Babel: to transpile ES6 code for compatibility with all browsers.
1. Jasmine: I have used this before and know it offers the functionality I need.
1. TypeORM: For compatibility, and because it supports both ActiveRecord and Data Mapper patterns.

## Dependencies
This project has the following dependencies:
- Node.js
- express: web framework.
- morgan: logging http requests.
- babel-cli: to compile files from the command line using babel.
- babel-preset-es2015: babel preset for all es2015 plugins.
- rimraf: for the unix command rm -rf in Node.js.
- jasmine: unit testing.

Many other dependencies were required by these dependencies. These were not listed for brevity.

## Next steps
- Build out a bigger web app using TDD.
- Setup webpack for deployment to GitHub Pages.
- Identify and setup an ORM for database management.

## Resources
The following tutorials were used to set this up:
- [Express application generator](https://expressjs.com/en/starter/generator.html)
- [Writing Your Node.js Apps Using ES6](https://www.codementor.io/iykyvic/writing-your-nodejs-apps-using-es6-6dh0edw2o)
- [Using Jasmine with node](https://jasmine.github.io/setup/nodejs.html)
