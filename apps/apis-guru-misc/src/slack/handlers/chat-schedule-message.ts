import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatScheduleMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const chatScheduleMessageHandler = app.openapi(postChatScheduleMessageRoute, (c) => {
  throw new Error('Not implemented')
})
