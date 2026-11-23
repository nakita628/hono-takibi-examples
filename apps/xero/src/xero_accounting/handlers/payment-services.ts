import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentServicesRoute, putPaymentServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentServicesHandler = app
  .openapi(getPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
