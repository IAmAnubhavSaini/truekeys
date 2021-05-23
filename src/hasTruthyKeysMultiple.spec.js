const hasTruthyKeysMultiple = require('./index').hasTruthyKeysMultiple;

describe('hasTruthyKeysMultiple', () => {
    const req = {
        body: {
            email: 'email',
            username: 'username',
            password: 'password',
            passwordConf: 'passwordConf'

        },
        headers: {
            safety: 'on'
        },
        attempt: 'success'
    };
    const array = [{
        obj: req,
        keys: [
            'attempt'
        ]
    },
        {
            obj: req.body,
            keys: [
                'email',
                'username',
                'password',
                'passwordConf'
            ]
        },
        {
            obj: req.headers,
            keys: [
                'safety'
            ]
        }
    ];

    it('returns true if all the provided keys in given obj resolve to truthy values', () => {
        const expected = true;
        const actual = hasTruthyKeysMultiple(array);
        expect(actual).toEqual(expected);
    });

    it('returns false if one of the provided keys in given obj doesn\'t resolve to truthy values', () => {
        const expected = false;
        const wrongData = array.concat([{
            obj: {
                x: 'x'
            },
            keys: ['y']
        }]);
        const actual = hasTruthyKeysMultiple(wrongData);
        expect(actual).toEqual(expected);
    });
});
