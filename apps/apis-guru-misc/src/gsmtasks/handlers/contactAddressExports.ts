import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactAddressExportsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const contactAddressExportsHandler = app.openapi(getContactAddressExportsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
