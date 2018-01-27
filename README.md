# truekeys

Find if a bunch of keys in an object are true - node module

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

  const truekeys = require('truekeys')

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

## License

MIT &copy; 2018 Git Faf
