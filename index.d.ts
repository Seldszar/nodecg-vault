import Conf = require('conf');

declare namespace Vault {
	interface Options<T> extends Omit<Conf.Options<T>, 'configName' | 'cwd' | 'projectName' | 'projectSuffix' | 'projectVersion'> {}
}

declare class Vault<T> extends Conf<T> {
	constructor(nodecg: any, options?: Vault.Options<T>);
}

export = Vault;
