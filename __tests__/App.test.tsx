/**
 * @format
 */

import 'react-native';
import { it } from '@jest/globals';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required after react-native.
import { act, create } from 'react-test-renderer';

import App from '../src/App';

jest.useFakeTimers();

// We await 'create' and 'act' to avoid fail cases in certain asynchronous libraries
it('renders correctly', async () => {
  const render = create(<App />);
  await act(async () => {
    expect(render).toBeDefined();
  });
});
