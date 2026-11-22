import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2LogsConfigMetricsMetricIdRoute,
  getApiV2LogsConfigMetricsMetricIdRoute,
  getApiV2LogsConfigMetricsRoute,
  patchApiV2LogsConfigMetricsMetricIdRoute,
  postApiV2LogsConfigMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsMetricsHandler = app
  .openapi(getApiV2LogsConfigMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsConfigMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LogsConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LogsConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
