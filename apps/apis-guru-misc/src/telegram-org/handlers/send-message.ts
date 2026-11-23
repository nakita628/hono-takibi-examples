import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const sendMessageHandler = app.openapi(postSendMessageRoute, (c) => {
  throw new Error('Not implemented')
})
