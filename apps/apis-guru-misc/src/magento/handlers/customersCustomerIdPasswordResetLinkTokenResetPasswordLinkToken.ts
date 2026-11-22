import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const customersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenHandler = app.openapi(
  getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
