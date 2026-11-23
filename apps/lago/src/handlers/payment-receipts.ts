import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentReceiptsLagoIdRoute, getPaymentReceiptsRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentReceiptsHandler = app
  .openapi(getPaymentReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentReceiptsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
