/** @type { import('@storybook/react').Preview } */
import React from 'react';
import '../src/styles/globals.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers'; // your Redux reducers

const store = createStore(reducers);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
];
