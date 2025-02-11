import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '../components/FilterProductTable/SearchBar';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/FilterProductTable/SearchBar',
  component: SearchBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {

  }
} satisfies Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const SearchBarPrimary: Story = {
  args: {
    onFilterTextChange: fn(),
    onInStockOnlyChange: fn()
  },
};