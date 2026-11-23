import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerGroupListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupListJsonHandler = app.openapi(getCustomerGroupListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
