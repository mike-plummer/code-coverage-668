'use strict';

const defaultExclude = require('@istanbuljs/schema/default-exclude');

export default {
  exclude: ['cypress/*'].concat(defaultExclude)
};