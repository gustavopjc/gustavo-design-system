import type { Meta, StoryObj } from '@storybook/vue3';
 
import GButton from './GButton.vue';
 
const meta: Meta<typeof GButton> = {
  component: GButton,
};
 
export default meta;
type Story = StoryObj<typeof GButton>;
 
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { GButton },
    setup() {
      return { args };
    },
    template: '<GButton v-bind="args" />',
  }),
  args: {
    color: "#0000ff"
  },
};