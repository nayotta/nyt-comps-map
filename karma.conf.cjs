import { createDefaultConfig } from '@open-wc/testing-karma';
import merge from 'deepmerge';

export default (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ['mocha', 'chai'],
      client: {
        mocha: {ui: 'tdd'},
      },
      files: [
        {
          pattern: config.grep ? config.grep : 'test/**/*_test.js',
          type: 'module',
        },
      ],
      // See the karma-esm docs for all options
      esm: {
        nodeResolve: true,
      },
    })
  );
  return config;
};
