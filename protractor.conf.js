'use strict';

module.exports.config = {
    directConnect: true,
    baseUrl: 'http://materializecss.com/forms.html',
    specs: ['*.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    }
};
