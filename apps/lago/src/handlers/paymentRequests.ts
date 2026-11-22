import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentRequestsLagoIdRoute,
  getPaymentRequestsRoute,
  postPaymentRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentRequestsHandler = app
  .openapi(postPaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentRequestsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
