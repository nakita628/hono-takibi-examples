import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTelemetryMetricsConfigRoute,
  getApiTelemetryMetricsConfigRoute,
  getApiTelemetryMetricsPingRoute,
  getApiTelemetryMetricsQueryRoute,
  getApiTelemetryMetricsStaticBoardRoute,
  postApiTelemetryMetricsBoardImportRoute,
  postApiTelemetryMetricsBoardsRoute,
  postApiTelemetryMetricsConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prometheusAPIHandler = app
  .openapi(postApiTelemetryMetricsBoardImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTelemetryMetricsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsStaticBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
