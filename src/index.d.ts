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
declare function hasTruthyKeys(obj: any, keys: string[]): boolean;
declare namespace hasTruthyKeys {
    var constraints: (obj: any, keys: string[]) => boolean;
}
declare type MatchPairT = {
    obj: any;
    keys: string[];
};
/***
 * It is like hasTruthyKeys, but accepts array of {obj, keys}
 *
 * @param matchPairs: MatchPairT[] { obj: object, keys: string[]}
 *
 * Check tests for sample cases.
 */
declare function hasTruthyKeysMultiple(matchPairs: MatchPairT[]): boolean;
declare namespace hasTruthyKeysMultiple {
    var constraints: (array: any[]) => boolean;
}
/***
 *
 * @param obj
 * @param keys
 *
 * Example:
 * obj = req { body: {email: ... } }, keys: ['body', 'email'] will return true since req.body.email exists
 */
declare function hasNestedTruthyKeys(obj: object, keys: string[]): boolean;
export { hasTruthyKeys, hasTruthyKeysMultiple, hasNestedTruthyKeys };
//# sourceMappingURL=index.d.ts.map