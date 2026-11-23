import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagesScheduledBroadcastsRoute } from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app.openapi(getMessagesScheduledBroadcastsRoute, (c) => {
  throw new Error('Not implemented')
})
