import React from 'react';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <div>
  <h1>react-glc</h1>
  <h2>Work in Progress</h2>
</div>;

ToStorybook.story = {
  name: 'to Storybook',
};
