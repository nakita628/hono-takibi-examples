import { OpenAPIHono } from '@hono/zod-openapi'
import { getChannelsScopeAppInstanceUserModeratedChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelsScopeAppInstanceUserModeratedChannelsHandler = app.openapi(
  getChannelsScopeAppInstanceUserModeratedChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
