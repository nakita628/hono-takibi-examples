import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentsAssetsPayButtonTokenButtonPngRoute,
  getPaymentsCouponsNameRoute,
  getPaymentsProvidersRoute,
  getPaymentsTokensStripeRoute,
  postPaymentsBidEndStripeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getPaymentsAssetsPayButtonTokenButtonPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsCouponsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsTokensStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsBidEndStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
