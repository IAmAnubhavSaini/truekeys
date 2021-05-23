# truekeys

## v5

- TypeScript-ified
- Renamed
- Documentation
- Clearer function definition.
- Removed a lot of dev dependencies, including eslint and chai.

Find if a bunch of keys in an object or objects are true - node module

## Utilizes Constraints Based Programming

[CBP](https://github.com/gitfaf/cbp)

## Use case

This is common in javascript code:

```javascript

if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
    // do something
}

```

Becomes easier and cleaner as shown in `Usage`.

## Usage

```javascript

const {hasTruthyKeys: has} = require('truekeys')

const req = {
    body: {
        email: 'email',
        username: 'username',
        password: 'password',
        passwordConf: 'passwordConf'
    }
}

const passwordConf = [
    'email',
    'username',
    'password',
    'passwordConf'
]

has(req.body, hasPasswordConf) // true

```

If there are many such objects and interesting keys, use `hasTruthyKeysMultiple` function.

```javascript

const {hasTruthyKeysMultiple} = require('truekeys')

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
}

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
    }]

hasTruthyKeysMultiple(array) // true

```

## Going deeper into a value

```javascript

const hasNestedTruthyKeys = require('truekeys').hasNestedTruthyKeys

var obj = {items: [{issue: [1, 2, 3]}, {issue: [2, 3, 4]}]}

hasNestedTruthyKeys(obj, ['items', '0', 'issues', 'length'])
// false

hasNestedTruthyKeys(obj, ['items', '0', 'issue', 'length'])
// true

```

## License

MIT &copy; 2018 Git Faf
