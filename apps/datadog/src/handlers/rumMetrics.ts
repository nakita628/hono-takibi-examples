import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumConfigMetricsMetricIdRoute,
  getApiV2RumConfigMetricsMetricIdRoute,
  getApiV2RumConfigMetricsRoute,
  patchApiV2RumConfigMetricsMetricIdRoute,
  postApiV2RumConfigMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumMetricsHandler = app
  .openapi(getApiV2RumConfigMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumConfigMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
