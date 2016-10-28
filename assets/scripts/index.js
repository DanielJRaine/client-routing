'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const initializeRouter = () => {
    // create router
    const appRouter = require('./router/index');
    
    // configure middleware
    // useMiddleware should only be called once ever in a single app
    appRouter.useMiddleware(require('./router/dom').transition);

    appRouter.start();
};

$(() => {
    initializeRouter();
    require('./router/events').registerPaths();
});