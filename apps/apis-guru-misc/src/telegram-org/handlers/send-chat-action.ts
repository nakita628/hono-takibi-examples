import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendChatActionRoute } from '../routes'

const app = new OpenAPIHono()

export const sendChatActionHandler = app.openapi(postSendChatActionRoute, (c) => {
  throw new Error('Not implemented')
})
