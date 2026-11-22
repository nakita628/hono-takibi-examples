import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPaymentIntentsPaymentIntentIdRoute,
  postApiOrdersOrderIdPaymentIntentsRoute,
  postApiPaymentIntentsPaymentIntentIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentIntentsHandler = app
  .openapi(postApiOrdersOrderIdPaymentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentIntentsPaymentIntentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentIntentsPaymentIntentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
