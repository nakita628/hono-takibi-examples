import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApmConfigMetricsMetricIdRoute,
  getApiV2ApmConfigMetricsMetricIdRoute,
  getApiV2ApmConfigMetricsRoute,
  patchApiV2ApmConfigMetricsMetricIdRoute,
  postApiV2ApmConfigMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spansMetricsHandler = app
  .openapi(getApiV2ApmConfigMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApmConfigMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApmConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApmConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApmConfigMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
