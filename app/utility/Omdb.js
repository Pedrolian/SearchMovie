const OMDB = require('../class/OMDb');
import {REACT_APP_OMDB_KEY} from '@env';

module.exports = new OMDB(REACT_APP_OMDB_KEY);
