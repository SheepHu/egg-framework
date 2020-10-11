'use strict';

const path = require('path');
const egg = require('egg');
const EG_PATH = require('egg#eggPath');

class Application extends egg.Application {
  get [EGG_PATH]() {
    return path.dirname(__dirname);
  };
}

module.exports = Application;
