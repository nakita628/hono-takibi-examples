import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app.openapi(getContactsRoute, (c) => {
  throw new Error('Not implemented')
})
