import type { Meta, StoryObj } from '@storybook/react';
 
import { ProductItemRow } from '../components/FilterProductTable/ProductItemRow';
 
const meta = {
    title: 'Components/FilterProductTable/ProductItemRow',
    component: ProductItemRow,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    argTypes: {
  
    }
  } satisfies Meta<typeof ProductItemRow>;
  export default meta;
type Story = StoryObj<typeof ProductItemRow>;
 
export const ProductItemRowStoryOne: Story = {
  args: {
    stocked:true,
    name:"test 1",
    price:"10$"
  }
};