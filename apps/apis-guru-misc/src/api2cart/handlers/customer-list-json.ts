import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerListJsonHandler = app.openapi(getCustomerListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
