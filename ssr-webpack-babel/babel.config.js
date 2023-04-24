const presets = [
  ['@babel/preset-env', {
    targets: { // browser-versions testing
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    "runtime": "automatic",
    // polyfills for browsers from target properties
    // Babel uses core-js polyfills by default
    useBuiltIns: "entry"
  }]
];

module.exports = { presets };
