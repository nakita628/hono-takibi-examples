import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsChannelHighlightsRoute,
  getChannelsChannelScheduleDateRoute,
  getChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelScheduleDateRoute, (c) => {
    throw new Error('Not implemented')
  })
