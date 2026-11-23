import { OpenAPIHono } from '@hono/zod-openapi'
import { postContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app.openapi(postContactsRoute, (c) => {
  throw new Error('Not implemented')
})
