import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactsRoute, postContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
