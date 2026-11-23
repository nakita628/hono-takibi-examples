import { OpenAPIHono } from '@hono/zod-openapi'
import { postCustomerGroupAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupAddJsonHandler = app.openapi(postCustomerGroupAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
