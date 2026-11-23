import { OpenAPIHono } from '@hono/zod-openapi'
import { postWhatsappContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsappContactsHandler = app.openapi(postWhatsappContactsRoute, (c) => {
  throw new Error('Not implemented')
})
