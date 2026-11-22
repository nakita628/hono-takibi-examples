import { OpenAPIHono } from '@hono/zod-openapi'
import { postChannelsChannelIdMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const publishingHandler = app.openapi(postChannelsChannelIdMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
