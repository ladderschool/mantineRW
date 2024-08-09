import * as React from 'react'

import { MantineProvider, useMantineColorScheme } from '@mantine/core'
import type { GlobalTypes } from '@storybook/csf'
import { addons } from '@storybook/preview-api'
import type { StoryFn, StoryContext } from '@storybook/react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

import theme from './mantine.config'
import '@mantine/core/styles.css'

const channel = addons.getChannel()

export const globalTypes: GlobalTypes = {}

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme()
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light')

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
  }, [channel])

  return children
}

const withMantine = (StoryFn: StoryFn, context: StoryContext) => {
  return (
    <MantineProvider theme={theme}>
      <ColorSchemeWrapper>
        <StoryFn {...context} />
      </ColorSchemeWrapper>
    </MantineProvider>
  )
}

export const decorators = [withMantine]
