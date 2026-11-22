import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2MetricsProjectKeyMetricKeyRoute,
  getApiV2MetricsProjectKeyMetricKeyRoute,
  getApiV2MetricsProjectKeyRoute,
  patchApiV2MetricsProjectKeyMetricKeyRoute,
  postApiV2MetricsProjectKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getApiV2MetricsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MetricsProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MetricsProjectKeyMetricKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2MetricsProjectKeyMetricKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MetricsProjectKeyMetricKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
