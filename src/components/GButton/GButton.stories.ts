import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GButton from './GButton.vue';

const meta = {
  title: 'GButton',
  render: (args) => ({
    components: { GButton },
    setup() {
      return { args };
    },
    template: '<GButton v-bind="args">Button</GButton>',
  }),
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outlined', 'text'] },
    size: { control: 'select', options: ['x-small', 'small', 'medium', 'large', 'x-large'] },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof GButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
