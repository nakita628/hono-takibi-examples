import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app.openapi(postVersionPhoneNumberIDMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
