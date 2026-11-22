import { OpenAPIHono } from '@hono/zod-openapi'
import { postMessagesWhatsappRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsappMessagingHandler = app.openapi(postMessagesWhatsappRoute, (c) => {
  throw new Error('Not implemented')
})
