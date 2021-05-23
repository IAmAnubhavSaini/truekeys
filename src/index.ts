/***
 * Accepts an object and a string key,
 * if key exists in the object,
 * and the value is truthy, returns true
 *
 * @param obj
 * @param key
 */
function isTruthyKeyValue(obj: any, key: string) {
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
function hasTruthyKeys(obj: any, keys: string[]): boolean {
    const validInput = hasTruthyKeys.constraints(obj, keys);
    if (validInput) {
        return keys.reduce((a: boolean, c: string) => a && isTruthyKeyValue(obj, c), true);
    } else {
        return false;
    }
}

/***
 * Constraints based developments,
 *  input values are check before they can be used in function.
 * @param obj
 * @param keys
 *
 */
hasTruthyKeys.constraints = (obj: any, keys: string[]): boolean => typeof obj === 'object' && Array.isArray(keys) && keys.length > 0;


type MatchPairT = {
    obj: any,
    keys: string[]
}

/***
 * It is like hasTruthyKeys, but accepts array of {obj, keys}
 *
 * @param matchPairs: MatchPairT[] { obj: object, keys: string[]}
 *
 * Check tests for sample cases.
 */
function hasTruthyKeysMultiple(matchPairs: MatchPairT[]): boolean {
    const validInput = hasTruthyKeysMultiple.constraints(matchPairs);
    if (validInput) {
        return matchPairs.reduce((a: boolean, c: MatchPairT) => a && hasTruthyKeys(c.obj, c.keys), true);
    } else {
        return false;
    }
}

hasTruthyKeysMultiple.constraints = (array: any[]): boolean => Array.isArray(array) && array.length > 0;

/***
 *
 * @param obj
 * @param keys
 *
 * Example:
 * obj = req { body: {email: ... } }, keys: ['body', 'email'] will return true since req.body.email exists
 */
function hasNestedTruthyKeys(obj: object, keys: string[]): boolean {
    return !!keys.reduce((a: any, c: any) => a && a[c] ? a[c] : false, obj);
}

export {
    hasTruthyKeys,
    hasTruthyKeysMultiple,
    hasNestedTruthyKeys
};
