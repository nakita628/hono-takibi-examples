import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChargeMetricsDataChargeMetricsDiscountAllocationDetailRoute,
  getChargeMetricsDataChargeMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chargeMetricsHandler = app
  .openapi(getChargeMetricsDataChargeMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChargeMetricsDataChargeMetricsDiscountAllocationDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
