# nodecg-vault

> Add vaults to NodeCG for storing bundle secrets.

# Install

```bash
$ npm install nodecg-vault
```

# Usage

```javascript
const Vault = require('nodecg-vault');

export = (nodecg) => {
  const vault = new Vault(nodecg);

  // Writes a new secret
  vault.set("mySecret", "Spark is the best!");

  // Reads the secret
  console.log(vault.get("mySecret"));

  // Deletes the secret
  vault.delete("mySecret");
};
```
