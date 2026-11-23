import { OpenAPIHono } from '@hono/zod-openapi'
import { postCustomerAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerAddJsonHandler = app.openapi(postCustomerAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
