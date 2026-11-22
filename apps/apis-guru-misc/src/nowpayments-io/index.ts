import { OpenAPIHono } from '@hono/zod-openapi'
import {
  billingSubPartnerAPIHandler,
  paymentsAPIHandler,
  payoutsAPIHandler,
  recurringPaymentsAPIEmailSubscriptionsFeatureHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', paymentsAPIHandler)
  .route('/', payoutsAPIHandler)
  .route('/', billingSubPartnerAPIHandler)
  .route('/', recurringPaymentsAPIEmailSubscriptionsFeatureHandler)

export default app
