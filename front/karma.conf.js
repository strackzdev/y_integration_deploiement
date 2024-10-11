module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'ChromeHeadlessNoSandbox'],
    customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
  });
};
