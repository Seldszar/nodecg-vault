# nodecg-vault

> Add vaults to NodeCG for storing bundle secrets

This module is built on top of `conf`, providing a way to store bundle secrets without having to worry about security concerns.

# Install

```bash
$ npm install nodecg-vault
```

# Usage

You can create a vault by simply constructing a new `Vault` instance.

```javascript
const Vault = require('nodecg-vault');

export = nodecg => {
  const vault = new Vault(nodecg);

  // Writes a new secret
  vault.set('mySecret', 'Spark is the best!');

  // Reads the secret
  console.log(vault.get('mySecret'));

  // Deletes the secret
  vault.delete('mySecret');
};
```

You can also use the `withVault` helper function to wrap the extension entrypoint and automatically return the associated vault in addition to the NodeCG instance.

```javascript
const {withVault} = require('nodecg-vault');

const options = {
  defaults: {
    mySecret: 'Spark is the best!'
  }
};

export = withVault(options, (nodecg, vault) => {
  console.log(vault.get('mySecret'));
});
```

## Author

Alexandre Breteau - [@0xSeldszar](https://twitter.com/0xSeldszar)

## License

MIT © [Alexandre Breteau](https://seldszar.fr)
