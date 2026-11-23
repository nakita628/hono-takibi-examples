import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advertisingEligibilityHandler,
  customPolicyHandler,
  fulfillmentPolicyHandler,
  kycHandler,
  paymentPolicyHandler,
  paymentsProgramHandler,
  privilegeHandler,
  programHandler,
  rateTableHandler,
  returnPolicyHandler,
  salesTaxHandler,
  subscriptionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', advertisingEligibilityHandler)
  .route('/', customPolicyHandler)
  .route('/', fulfillmentPolicyHandler)
  .route('/', kycHandler)
  .route('/', paymentPolicyHandler)
  .route('/', paymentsProgramHandler)
  .route('/', privilegeHandler)
  .route('/', programHandler)
  .route('/', rateTableHandler)
  .route('/', returnPolicyHandler)
  .route('/', salesTaxHandler)
  .route('/', subscriptionHandler)

export default app
