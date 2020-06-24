import {expectType} from 'tsd';
import Vault = require('.');

expectType<Vault<any>>(new Vault<any>(null));
