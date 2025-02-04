import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinearProgress } from './linear-progress'

const story: ComponentMeta<typeof LinearProgress> = {
  title: 'Components/Loading/Linear progress',
  component: LinearProgress,
  args: {
    max: 100,
    showProgress: true,
    dimension: 'regular'
  },
  argTypes: {
    value: {
      control: { type: 'range' }
    },
    dimension: {
      options: ['regular', 'big'],
      control: { type: 'radio' }
    }
  }
}

export default story

const Template: ComponentStory<typeof LinearProgress> = (args) => <LinearProgress {...args} />

export const Determinate = Template.bind({})
Determinate.args = {
  value: 40
}
export const Indeterminate = Template.bind({})
