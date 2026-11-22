import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRoute,
  getApiPaymentOrdersPaymentOrderIdReversalsRoute,
  postApiPaymentOrdersPaymentOrderIdReversalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reversalHandler = app
  .openapi(getApiPaymentOrdersPaymentOrderIdReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentOrdersPaymentOrderIdReversalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentOrdersPaymentOrderIdReversalsReversalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
