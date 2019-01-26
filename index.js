'use strict';

const isLinux = process.platform=='linux';
const printInfo = console.info;
const printLog = console.log;
const printWarn = console.warn;
const printError = console.error;

function getTime(level) {
	let date = new Date();
	return `${level} | ${date.toLocaleString()}.${date.getMilliseconds()} |`;
}

console.info = function(...args) {
	if (!isLinux) {
		printInfo(getTime('I'), ...args);
	}
};

console.log = function(...args) {
	printLog(getTime('D'), ...args);
};

console.warn = function(...args) {
	printWarn(getTime('W'), ...args);
};

console.error = function(...args) {
	printError(getTime('E'), ...args);
};

require('compilec');
require('./startup');