import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1RevenueItemsChargeRevenueSummariesCrsNumberRoute,
  getV1RevenueItemsRevenueEventsEventNumberRoute,
  getV1RevenueItemsRevenueSchedulesRsNumberRoute,
  putV1RevenueItemsRevenueEventsEventNumberRoute,
  putV1RevenueItemsRevenueSchedulesRsNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revenueItemsHandler = app
  .openapi(getV1RevenueItemsChargeRevenueSummariesCrsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueItemsRevenueEventsEventNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueItemsRevenueEventsEventNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueItemsRevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RevenueItemsRevenueSchedulesRsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
