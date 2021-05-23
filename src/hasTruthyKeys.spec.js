
const hasTruthyKeys = require('./index').hasTruthyKeys;

describe('hasTruthyKeys', () => {
    const req = {
        body: {
            email: 'email',
            username: 'username',
            password: 'password',
            passwordConf: 'passwordConf'

        }
    };
    const keys = [
        'email',
        'username',
        'password',
        'passwordConf'
    ];
    it('returns true if the provided key in the given obj resolve to truthy values', () => {
        const expected = true;
        const actual = hasTruthyKeys(req.body, ['email']);
        expect(actual).toEqual(expected);
    });
    it('returns true if all the provided keys in given obj resolve to truthy values', () => {
        const expected = true;
        const actual = hasTruthyKeys(req.body, keys);
        expect(actual).toEqual(expected);
    });
    it('returns false if one of the provided keys in given obj doesn\'t resolve to truthy values', () => {
        const expected = false;
        const keys2 = [...keys, 'x'];
        const actual = hasTruthyKeys(req.body, keys2);
        expect(actual).toEqual(expected);
    });
    it('returns false if keys exists but value is falsy', () => {
        const expected = false;
        const obj = {k1: false, k2: 0n};
        const actual = hasTruthyKeys(obj, ['k1']);
        expect(actual).toEqual(expected);
    });
});
