import type { Meta, StoryObj } from '@storybook/react';
 
import { ProductTableByCategorie } from '../components/FilterProductTable/ProductTableByCategorie';
 
const meta = {
    title: 'Components/FilterProductTable/ProductTableByCategorie',
    component: ProductTableByCategorie,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    argTypes: {
  
    }
  } satisfies Meta<typeof ProductTableByCategorie>;
  export default meta;
type Story = StoryObj<typeof ProductTableByCategorie>;
 
export const ProductTableByCategoryPrimary: Story = {
  args: {
    category:"Fruits",
    products:[
        { price: "$1", stocked: true, name: "Apple" },
        { price: "$1", stocked: true, name: "Dragonfruit" },
        { price: "$2", stocked: false, name: "Passionfruit" }
    ]
  }
};