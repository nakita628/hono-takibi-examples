import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ChargeRevenueSummariesCrsNumberRoute,
  getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chargeRevenueSummariesHandler = app
  .openapi(getV1ChargeRevenueSummariesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChargeRevenueSummariesCrsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
