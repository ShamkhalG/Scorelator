// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  // Add an alias for Subject.js with the original casing
  'components/Subject': './components/Subject.js',
};

module.exports = config;