import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';
import { ColorPickerPopoverComponent } from '../app/color-picker-popover/color-picker-popover.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ColorPickerPopoverComponent> = {
  title: 'ColorPicker',
  component: ColorPickerPopoverComponent,
  tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: {
//       control: 'color',
//     },
//   },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ColorPickerPopoverComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
