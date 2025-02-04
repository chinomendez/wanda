import { IconProps } from '@wonderflow/react-components'

type ResourceItemType = {
  title: string,
  icon?: IconProps['source'],
  iconColor?: string,
  url?: string,
  description?: string
}

type ResourcesType = {
  title: string,
  items: ResourceItemType[]
}

export const AssetResources: ResourcesType[] = [
  {
    title: 'Logos and icons',
    items: [
      {
        title: 'Full Logo',
        icon: 'arrow-down-to-bracket',
        iconColor: 'cyan',
        url: '/assets/brand/full-logo.zip',
        description: 'Download the full version of the logo which includes mark and wordmark.'
      },
      {
        title: 'Mark Logo',
        icon: 'arrow-down-to-bracket',
        iconColor: 'cyan',
        url: '/assets/brand/mark-logo.zip',
        description: 'This version of the logo include only the mark.'
      },
      {
        title: 'Icons',
        icon: 'arrow-down-to-bracket',
        iconColor: 'cyan',
        url: '/assets/brand/icons.zip',
        description: 'Includes the logo icons to use for applications, mobile home shortucuts, or favicons.'
      }
    ]
  },
  {
    title: 'Fonts',
    items: [
      {
        title: 'San Francisco',
        icon: 'text',
        iconColor: 'purple',
        url: 'https://developer.apple.com/fonts/',
        description: 'The official Apple font used by Wanda on Mac/iOS operating systems.'
      },
      {
        title: 'Segoe UI',
        icon: 'text',
        iconColor: 'purple',
        url: 'https://docs.microsoft.com/en-us/windows/apps/design/downloads/#fonts',
        description: 'The official Windows font used by Wanda on Windows operating system.'
      },
      {
        title: 'Ubuntu',
        icon: 'text',
        iconColor: 'purple',
        url: 'https://design.ubuntu.com/font/',
        description: 'The official Ubuntu font used by Wanda on Ubuntu operating system.'
      }
    ]
  },
  {
    title: 'Color palettes',
    items: [
      {
        title: 'Adobe ACO',
        icon: 'grip-vertical',
        iconColor: 'green',
        url: '/assets/palettes/wonderflow.aco.zip',
        description: 'The structured color palette for Adobe suite including all the colors tokens.'
      },
      {
        title: 'Adobe ASE',
        icon: 'grip-vertical',
        iconColor: 'green',
        url: '/assets/palettes/wonderflow.ase.zip',
        description: 'The flat color palette for Adobe suite including all the colors tokens.'
      }
    ]
  },
  {
    title: 'Iconography',
    items: [
      {
        title: 'Solid icons',
        icon: 'star',
        iconColor: 'yellow',
        url: 'https://downgit.github.io/#/home?url=https://github.com/wonderflow-bv/wanda/tree/main/packages/icons/svgs/solid',
        description: 'The full set of solid icons used by Wanda.'
      },
      {
        title: 'Outline icons',
        icon: 'star',
        iconColor: 'yellow',
        url: 'https://downgit.github.io/#/home?url=https://github.com/wonderflow-bv/wanda/tree/main/packages/icons/svgs/outline',
        description: 'The full set of outline icons used by Wanda.'
      },
      {
        title: 'Duotone icons',
        icon: 'star',
        iconColor: 'yellow',
        url: 'https://downgit.github.io/#/home?url=https://github.com/wonderflow-bv/wanda/tree/main/packages/icons/svgs/duotone',
        description: 'The full set of duotone icons used by Wanda.'
      }
    ]
  }
]
