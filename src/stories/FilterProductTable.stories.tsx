import type { Meta, StoryObj } from '@storybook/react';

import { FilterProductTable } from '../components/FilterProductTable/FilterProductTable';

const meta = {
  title: 'Components/FilterProductTable/FilterProductTable',
  component: FilterProductTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {

  }
} satisfies Meta<typeof FilterProductTable>;
export default meta;
type Story = StoryObj<typeof FilterProductTable>;

export const FilterProductTablePrimary: Story = {
  args: {
    products: [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
  }
};
export const FilterProductTableSecound: Story = {
  args: {
    products: [

    ]
  }
};