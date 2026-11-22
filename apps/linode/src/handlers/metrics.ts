import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionMonitorDashboardsDashboardIdRoute,
  getApiVersionMonitorDashboardsRoute,
  getApiVersionMonitorServicesRoute,
  getApiVersionMonitorServicesServiceTypeDashboardsRoute,
  getApiVersionMonitorServicesServiceTypeMetricDefinitionsRoute,
  getApiVersionMonitorServicesServiceTypeRoute,
  postApiVersionMonitorServicesServiceTypeMetricsRoute,
  postApiVersionMonitorServicesServiceTypeTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getApiVersionMonitorDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeMetricDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionMonitorServicesServiceTypeMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionMonitorServicesServiceTypeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
