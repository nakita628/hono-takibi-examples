import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentStateRequestIdRoute, postPaymentAddrequestRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentPortalHandler = app
  .openapi(postPaymentAddrequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentStateRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
