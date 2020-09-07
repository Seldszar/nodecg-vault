import {expectType} from 'tsd';
import Vault = require('.');

const nodecg = {
	bundleName: 'lorem',
	bundleVersion: '1.0.0'
};

expectType<Vault<typeof nodecg>>(new Vault(nodecg));
