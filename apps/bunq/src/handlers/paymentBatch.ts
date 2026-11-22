import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentBatchHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
