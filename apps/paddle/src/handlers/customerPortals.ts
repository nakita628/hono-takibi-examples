import { OpenAPIHono } from '@hono/zod-openapi'
import { postCustomersCustomerIdPortalSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const customerPortalsHandler = app.openapi(
  postCustomersCustomerIdPortalSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
