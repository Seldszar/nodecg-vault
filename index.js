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

module.exports = Vault;
