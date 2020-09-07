import Conf, {Options as BaseOptions} from 'conf';

declare namespace Vault {
	/**
	 * The vault option.
	 */
	interface Options<T = any> extends Omit<BaseOptions<T>, 'configName' | 'cwd' | 'projectName' | 'projectSuffix' | 'projectVersion'> {}

	/**
	 * A function returning the NodeCG instance and its vault.
	 */
	type Handler<T, V> = (nodecg: T, vault: Vault<V>) => void;
}

declare class Vault<T = any, V = any> extends Conf<T> {
	/**
	 * Creates a new vault.
	 * @param nodecg the NodeCG instance
	 * @param options this vault options
	 */
	constructor(nodecg: T, options?: Vault.Options<V>);

	/**
	 * Creates a wrapper returning the NodeCG instance and its vault.
	 * @param handler the handler
	 */
	static withVault<T = any, V = any>(handler: Vault.Handler<T, V>): void;

	/**
	 * Creates a wrapper returning the NodeCG instance and its vault.
	 * @param options this vault options
	 * @param handler the handler
	 */
	static withVault<T = any, V = any>(options: Vault.Options<V>, handler: Vault.Handler<T, V>): void;
}

export = Vault;
