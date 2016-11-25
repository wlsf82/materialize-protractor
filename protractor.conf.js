'use strict';

const SpecReporter = require('jasmine-spec-reporter');

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
        
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
};
