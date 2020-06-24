import {expectType} from 'tsd';
import Vault = require('.');

const nodecg = {
	bundleName: 'lorem',
	bundleVersion: '1.0.0'
};

expectType<Vault>(new Vault(nodecg));
