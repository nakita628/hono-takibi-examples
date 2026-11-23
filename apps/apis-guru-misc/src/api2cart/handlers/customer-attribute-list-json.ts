import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerAttributeListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerAttributeListJsonHandler = app.openapi(
  getCustomerAttributeListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
