module.exports = function (config) {
  config.set({
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },

    reporters: ['progress', 'kjhtml', 'coverage-istanbul'],

    preprocessors: {
      'src/**/*.ts': ['coverage']
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|\.spec\.ts$/
          }
        ]
      }
    }
  });
};
