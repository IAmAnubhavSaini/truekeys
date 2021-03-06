"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNestedTruthyKeys = exports.hasTruthyKeysMultiple = exports.hasTruthyKeys = void 0;
/***
 * Accepts an object and a string key,
 * if key exists in the object,
 * and the value is truthy, returns true
 *
 * @param obj
 * @param key
 */
function isTruthyKeyValue(obj, key) {
    return !!obj[key];
}
/***
 *
 * @param obj target of the keys
 * @param keys array of keys that are supposed to be in obj, at highest level.
 *
 * Sample #1: true
 * obj: req : {body: { email }, headers: {} }, keys: ['body', 'headers']
 * true, because req.body and req.headers exist
 *
 * Sample #2: false
 * obj: req : {body: { email: {isActive} }, headers: {} }, keys: ['body', 'isActive']
 * false, because req.body exists but req.isActive doesn't
 */
function hasTruthyKeys(obj, keys) {
    var validInput = hasTruthyKeys.constraints(obj, keys);
    if (validInput) {
        return keys.reduce(function (a, c) { return a && isTruthyKeyValue(obj, c); }, true);
    }
    else {
        return false;
    }
}
exports.hasTruthyKeys = hasTruthyKeys;
/***
 * Constraints based developments,
 *  input values are check before they can be used in function.
 * @param obj
 * @param keys
 *
 */
hasTruthyKeys.constraints = function (obj, keys) { return typeof obj === 'object' && Array.isArray(keys) && keys.length > 0; };
/***
 * It is like hasTruthyKeys, but accepts array of {obj, keys}
 *
 * @param matchPairs: MatchPairT[] { obj: object, keys: string[]}
 *
 * Check tests for sample cases.
 */
function hasTruthyKeysMultiple(matchPairs) {
    var validInput = hasTruthyKeysMultiple.constraints(matchPairs);
    if (validInput) {
        return matchPairs.reduce(function (a, c) { return a && hasTruthyKeys(c.obj, c.keys); }, true);
    }
    else {
        return false;
    }
}
exports.hasTruthyKeysMultiple = hasTruthyKeysMultiple;
hasTruthyKeysMultiple.constraints = function (array) { return Array.isArray(array) && array.length > 0; };
/***
 *
 * @param obj
 * @param keys
 *
 * Example:
 * obj = req { body: {email: ... } }, keys: ['body', 'email'] will return true since req.body.email exists
 */
function hasNestedTruthyKeys(obj, keys) {
    return !!keys.reduce(function (a, c) { return a && a[c] ? a[c] : false; }, obj);
}
exports.hasNestedTruthyKeys = hasNestedTruthyKeys;
//# sourceMappingURL=index.js.map