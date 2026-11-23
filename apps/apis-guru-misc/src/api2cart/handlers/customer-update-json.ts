import { OpenAPIHono } from '@hono/zod-openapi'
import { putCustomerUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerUpdateJsonHandler = app.openapi(putCustomerUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
