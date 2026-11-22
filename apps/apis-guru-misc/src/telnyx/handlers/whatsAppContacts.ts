import { OpenAPIHono } from '@hono/zod-openapi'
import { postWhatsappContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppContactsHandler = app.openapi(postWhatsappContactsRoute, (c) => {
  throw new Error('Not implemented')
})
