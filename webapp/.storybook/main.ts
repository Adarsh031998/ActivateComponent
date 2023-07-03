import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  webpackFinal(config) {
    config.module?.rules?.push({
      test: /\.css$/i,
      loader: 'css-loader',
      options: {
        url: true
      }
    });
    return config;
  },
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};

export default config;
