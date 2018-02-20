# truekeys

Find if a bunch of keys in an object are true - node module

## Utilizes Constraints Based Programming

[CBP](https://github.com/gitfaf/cbp)

## Use case

Removes following hideous issue:

```javascript

  if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
    // do something
  }

```

Becomes easier and cleaner as shown in `Usage`.

## Usage

```javascript

  const { truekeys } = require('truekeys')

  const req = {
    body: {
      email: 'email',
      username: 'username',
      password: 'password',
      passwordConf: 'passwordConf'
    }
  }

  const keys = [
    'email',
    'username',
    'password',
    'passwordConf'
  ]

  truekeys(req.body, keys) // true

```

If there are many such objects and interesting keys, use `manyTruekeys` function.

```javascript

  const { manyTruekeys } = require('truekeys')

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

  manyTruekeys(array) // true

```

## Figuring out if deep keys

### Singlekey

```javascript

  const singleDeep = require('truekeys').singleDeep

  var obj = { items: [ { issue: [ 1, 2, 3] }, { issue: [2, 3, 4] } ] }

  singleDeep(obj, ['items', '0', 'issues', 'length' ])
  // false

  singleDeep(obj, ['items', '0', 'issue', 'length' ])
  // true

```

## License

MIT &copy; 2018 Git Faf
