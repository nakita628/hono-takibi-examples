import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTelemetryMetricsGrafanaConfigRoute,
  getApiTelemetryMetricsGrafanaBoardsRoute,
  getApiTelemetryMetricsGrafanaConfigRoute,
  getApiTelemetryMetricsGrafanaPingRoute,
  getApiTelemetryMetricsGrafanaQueryRoute,
  getApiTelemetryMetricsGrafanaScanRoute,
  postApiTelemetryMetricsGrafanaBoardsRoute,
  postApiTelemetryMetricsGrafanaConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const grafanaAPIHandler = app
  .openapi(getApiTelemetryMetricsGrafanaBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsGrafanaBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTelemetryMetricsGrafanaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTelemetryMetricsGrafanaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTelemetryMetricsGrafanaScanRoute, (c) => {
    throw new Error('Not implemented')
  })
