import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentIntentsPaymentIntentIdRoute,
  postPaymentIntentsPaymentIntentIdRoute,
  postPaymentIntentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentIntentsHandler = app
  .openapi(getPaymentIntentsPaymentIntentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentIntentsPaymentIntentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
