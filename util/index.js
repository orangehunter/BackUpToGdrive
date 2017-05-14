/*jshint esversion: 6 */
"use strict";

var util = module.exports;

util.input = function(print, callback) {
  var stdin = process.stdin,
    stdout = process.stdout;
  stdin.resume();
  stdout.write(print);

  stdin.once('data', function(data) {
    data = data.toString().trim();
    callback(data);
  });
};

util.refresh = function(print){
  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line
  process.stdout.write(print);  // write text
};
