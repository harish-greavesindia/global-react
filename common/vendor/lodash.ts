const has = require('lodash/has');
const get = require('lodash/get');
const startCase = require('lodash/startCase');
const size = require('lodash/size');
const map = require('lodash/map');

const lodash = require('lodash/wrapperLodash');
const baseForOwn = require('lodash/_baseForOwn');
const mixin = require('lodash/mixin');

// Add methods that return wrapped values in chain sequences.
lodash.filter = require('lodash/filter');

// Add methods to `lodash.prototype`.
mixin(lodash, lodash);

// Add methods that return unwrapped values in chain sequences.
lodash.replace = require('lodash/replace');

mixin(lodash, (function() {
    const source = {};
    baseForOwn(lodash, function(func : any, methodName : any) {
        if (!source.hasOwnProperty.call(lodash.prototype, methodName)) {
            source[methodName] = func;
        }
    });
    return source;
}()), { 'chain': false });

// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.chain = require('lodash/wrapperChain');
lodash.prototype.value = require('lodash/wrapperValue');


export {has , get  , startCase , size , map , lodash};

