const Conf = require('conf');

class Vault extends Conf {
	constructor(nodecg, options) {
		super({
			...options,
			configName: nodecg.bundleName,
			projectName: nodecg.bundleName,
			projectVersion: nodecg.bundleVersion,
			cwd: 'db/vaults'
		});
	}
}

Vault.withVault = (options, callback) => {
	if (typeof options === 'function') {
		return Vault.withVault(undefined, options);
	}

	return nodecg => callback(nodecg, new Vault(nodecg, options));
};

module.exports = Vault;
