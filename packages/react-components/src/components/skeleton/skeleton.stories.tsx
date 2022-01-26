import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Skeleton } from './skeleton'

export default {
  title: 'Components/Loading/Skeleton',
  component: Skeleton,
  args: {
    radius: 8,
    enableAnimation: true,
    inline: false
  }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '400px',
  count: '4px',
  height: '48px'
}

export const Circle = Template.bind({})
Circle.args = {
  circle: true,
  width: '80px',
  height: '80px'
}

export const Rounded = Template.bind({})
Rounded.args = {
  width: '400px',
  height: '48px',
  borderRadius: 16
}
