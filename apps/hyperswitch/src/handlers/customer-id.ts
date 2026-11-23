import { OpenAPIHono } from '@hono/zod-openapi'
import { postCustomerIdPaymentMethodsPaymentMethodIdDefaultRoute } from '../routes'

const app = new OpenAPIHono()

export const customerIdHandler = app.openapi(
  postCustomerIdPaymentMethodsPaymentMethodIdDefaultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
