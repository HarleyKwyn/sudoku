Sudoku
======

Sudoku page built in pure JavaScript, HTML, CSS

Okay so not totally pure, here's some of the tools included in this projects:

-Hapi
    Simple node framework to serve up static files and do template rendering
-Handlebars
    Light weight templating language. Allows custom helpers which I'll use to make rendering the board easier and more flexible for future adaptability.
- zepto
    Light weight, easy to use, lets our page load faster and no more dreaded sizzle queries for ancient browsers. 
- stylus
    Because who wants to write pure CSS all the time?
- lowdash
    Everyone's favorite utility belt. Keeping code DRY and fast.
- gulp

DOM structure:
title
body
header
    Table, inner outer boxes.
Footer

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
