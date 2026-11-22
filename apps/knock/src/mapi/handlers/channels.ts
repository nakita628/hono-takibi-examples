import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ChannelsChannelKeyRoute, getV1ChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getV1ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelsChannelKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
