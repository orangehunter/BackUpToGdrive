/*jshint esversion: 6 */
"use strict";

var log4js = require('log4js');
log4js.configure(require('./config/log4js.json'));

var sysLog = log4js.getLogger('sysLog');

var util = require('./util');

util.input('Please enter the path. :', function(data){
  console.log(data);
});
