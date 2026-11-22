import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EstimateRoute,
  getV1MinAmountRoute,
  getV1PaymentIndexRoute,
  getV1PaymentPaymentIdRoute,
  postV1PaymentIdUpdateMerchantEstimateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsAPIHandler = app
  .openapi(getV1EstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MinAmountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentIdUpdateMerchantEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
