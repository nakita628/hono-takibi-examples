import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetricsActiveSubscribersRoute,
  getMetricsChargebacksRoute,
  getMetricsCheckoutConversionRoute,
  getMetricsExploreEntitiesRoute,
  getMetricsMonthlyRecurringRevenueChangeRoute,
  getMetricsMonthlyRecurringRevenueRoute,
  getMetricsRefundsRoute,
  getMetricsRevenueRoute,
  postMetricsExploreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsExploreEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsExploreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMonthlyRecurringRevenueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsActiveSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMonthlyRecurringRevenueChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRevenueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsCheckoutConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
