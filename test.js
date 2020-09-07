const test = require('ava');
const fs = require('fs');
const Vault = require('.');

const nodecgInstance = {
	bundleName: 'lorem',
	bundleVersion: '1.0.0'
};

test.afterEach(() => {
	fs.rmdirSync('db', {recursive: true});
});

test('creates a new vault', t => {
	const vault = new Vault(nodecgInstance, {
		defaults: {
			mySecret: 'Spark is the best!'
		}
	});

	t.is(vault.get('mySecret'), 'Spark is the best!');
});

test('creates a vault wrapper', async t => {
	const options = {
		defaults: {
			mySecret: 'Spark is the best!'
		}
	};

	await new Promise(resolve => {
		const wrapped = Vault.withVault(options, (nodecg, vault) => {
			t.is(nodecg, nodecgInstance);
			t.is(vault.constructor, Vault);

			resolve();
		});

		wrapped(nodecgInstance);
	});
});
