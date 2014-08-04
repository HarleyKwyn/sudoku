Sudoku
======

Sudoku page built in pure JavaScript, HTML, CSS

Okay so not totally pure, here's some of the tools included in this projects:

#Run it locally:

 - fork the Repo and clone it down
 - run `npm install`
 - run `npm start`
 - got to localhost:/8080
 - play sudoku!

#Technologies used:

 - Hapi
    Simple node framework to serve up static files and do template rendering
 - Handlebars
    Light weight templating language. Allows custom helpers which I'll use to make rendering the board easier and more flexible for future adaptability. Although this is being done on the server handle bars is flexible and light weight enough that you can do client side pre-processing if need be. 
 - zepto
    Light weight, easy to use, lets our page load faster and no more dreaded sizzle queries for ancient browsers. 
 - stylus
    Because who wants to write pure CSS all the time?
 - lodash
    Everyone's favorite utility belt. Keeping code DRY and fast.
 - gulp
    For development ease
 - mocha & chai
    For testing in JavaScript and the expect notation and deep equality that chai provides.


#Architecture
Board data:
It's essential to have a data structure to represent the current board state. It's simple enough to have a set of nested arrays. Eventually will write an algorithm to generate this. If not just use one from github, there's many ways to write an algorithm to create sudoku boards. That'll look like this for the given defaults board:

```javascript
[
 5, 3, 0, 0, 7, 0, 0, 0, 0,
 6, 0, 0, 1, 9, 5, 0, 0, 0,
 0, 9, 8, 0, 0, 0, 0, 6, 0,
 8, 0, 0, 0, 6, 0, 0, 0, 3,
 4, 0, 0, 8, 0, 3, 0, 0, 1,
 7, 0, 0, 0, 2, 0, 0, 0, 6,
 0, 6, 0, 0, 0, 0, 2, 8, 0,
 0, 0, 0, 4, 1, 9, 0, 0, 5,
 0, 0, 0, 0, 8, 0, 0, 7, 9
]
```

I've elected to use a html templating engine and server side pre-rendering to optimize perceived page load times.

Inputs have a type = number so that on phones the number pad will pop up instead of full keybaord.

(realizing now that I would rather have a pop up interface for selecting appropriate number instead of having free for all input. This would be a nice to have and if I had more time I'd implement that using jQuery/Zepto)

#Future work:
 - board generator
 - board solver
 - Win Animation
