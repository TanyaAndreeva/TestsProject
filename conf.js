exports.config = {

    chromeOnly: true,

    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    specs: ['test/test1.js'],
    framework: 'mocha',

    onPrepare: function() {
    }
};