const hasNestedTruthyKeys = require('./index').hasNestedTruthyKeys;

describe('hasNestedTruthyKeys', () => {
    const req = {
        body: {
            email: 'email',
            username: 'username',
            password: 'password',
            passwordConf: 'passwordConf',
            user: {
                id: {
                    value: '123',
                    type: 'string'
                }
            }
        }
    };
    const keys = [
        'body',
        'email'
    ];

    it('returns true if all the provided keys in given obj resolve to truthy values', () => {
        const expected = true;
        const actual = hasNestedTruthyKeys(req, keys);
        expect(actual).toEqual(expected);
    });
    it('returns true even if we go deep...', () => {
        const expected = true;
        const actual = hasNestedTruthyKeys(req, ['body', 'user', 'id', 'value']);
        expect(actual).toEqual(expected);
    });
    it('returns false if one of the provided keys in given obj doesn\'t resolve to truthy values', () => {
        const expected = false;
        const keys2 = [...keys, 'x'];
        const actual = hasNestedTruthyKeys(req, keys2);
        expect(actual).toEqual(expected);
    });
});
