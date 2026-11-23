import { OpenAPIHono } from '@hono/zod-openapi'
import { getChannelChannelIdRoute, getChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const channelHandler = app
  .openapi(getChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
