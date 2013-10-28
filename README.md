# sibLoop - loop through siblings with jQuery

`sibLoop` is an extremely lightweight (only 0.3kb) jQuery plugin that allows you to loop through sibling elements. 

When manipulating DOM elements with jQuery, it is common to want to loop through siblings. You want to get the next sibling element, or, if there isn't a next element, loop back to the first sibling. jQuery doesn't support this out of the box - it is necessary to write your own code to handle the *next or first* logic.

This plugin adds two methods to jQuery - `.loopNext()` and `.loopPrev()` - which handle the logic for you and allow you to keep chaining methods.

## Download

Grab the files below. Production version is only 0.3kb when gzipped. 

* [Development](https://github.com/pdmulvey/sibLoop/raw/master/src/jquery.sibloop.js) - unminified
* [Production](https://github.com/pdmulvey/sibLoop/raw/master/src/jquery.sibloop.min.js) - minified

## Usage

Simply include jQuery and sibLoop in your HTML as normal. There are no configuration options or setup steps required. 

The two methods are pretty self-explanatory; `.loopNext()` will get the *next or first* sibling element, while `.loopPrev()` will get the *previous or last* sibling. 

The method signatures for `.loopNext()` and `.loopPrev()` match those of jQuery's [`.next()`](http://api.jquery.com/next/) and [`.prev()`](http://api.jquery.com/prev/). You can pass in a `selector` parameter to filter siblings, the methods are chainable, they work with collections of more than one element - in short, everything works as you would expect a jQuery method to work. 

## Requirements

* jQuery - should work with any version > 1.5.