import type { Meta, StoryObj } from '@storybook/react';
 
import { ProductTable } from '../components/FilterProductTable/ProductTable';
 
const meta = {
    title: 'Components/FilterProductTable/ProductTable',
    component: ProductTable,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    argTypes: {
  
    }
  } satisfies Meta<typeof ProductTable>;
  export default meta;
type Story = StoryObj<typeof ProductTable>;
 
export const ProductTablePrimary: Story = {
  args: {
    categories:[
        "Fruits","Vegetables"
    ],
    products:[
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
  }
};