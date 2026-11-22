import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersCustomerIdPermissionsReadonlyRoute } from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdPermissionsReadonlyHandler = app.openapi(
  getV1CustomersCustomerIdPermissionsReadonlyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
