const test = require('ava');
const fs = require('fs');
const Vault = require('.');

const nodecg = {
	bundleName: 'lorem',
	bundleVersion: '1.0.0'
};

test.afterEach(() => {
	fs.rmdirSync('db', {recursive: true});
});

test('creates a new vault', t => {
	const vault = new Vault(nodecg, {
		defaults: {
			mySecret: 'Spark is the best!'
		}
	});

	t.is(vault.get('mySecret'), 'Spark is the best!');
});
