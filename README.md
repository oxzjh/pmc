# PMC

### Process Manager
### User HTTP protocol

## Startup
```
nohup node pmc/index.js 6000 A_RANDOM_SECRET SIGN >/root/.pmc/pmc.log 2>&1 &
```
#### arg1 6000 is the http server port.
#### arg2 is secret.
#### arg3 check sign, if you don't want to check sign, ignore this argument.

## Client API

### App
```
/**
 * @class App
 */

/**
 * Start a nodejs process
 * @method start
 * @param {string} script | Full path of the entry script.
 * @param {string} name | The name of the script.
 * @param {string} args
 * @param {int} instances
 * @return {object}
 */

/**
 * Stop a nodejs process
 * @method stop
 * @param {string} name | The app name.
 * @return {object}
 */

/**
 * List all process
 * @method list
 * @return {object}
 */
```

### Sys
```
/**
 * @class Sys
 */

/**
 * Execute system command
 * @method exec
 * @param {string} command
 * @return {object}
 */

/**
 * Read file
 * @method read
 * @param {string} path
 * @return {object}
 */
```

### Mysql

### Redis