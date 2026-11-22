import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDPaymentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDPaymentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
