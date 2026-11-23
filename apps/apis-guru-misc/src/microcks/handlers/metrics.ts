import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetricsConformanceAggregateRoute,
  getMetricsConformanceServiceServiceIdRoute,
  getMetricsInvocationsGlobalLatestRoute,
  getMetricsInvocationsGlobalRoute,
  getMetricsInvocationsServiceNameServiceVersionRoute,
  getMetricsInvocationsTopRoute,
  getMetricsTestsLatestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsConformanceAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsConformanceServiceServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsInvocationsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsInvocationsGlobalLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsInvocationsTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsInvocationsServiceNameServiceVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsTestsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
