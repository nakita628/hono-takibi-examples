import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomMetricMetricNameRoute,
  getCustomMetricMetricNameRoute,
  patchCustomMetricMetricNameRoute,
  postCustomMetricMetricNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customMetricHandler = app
  .openapi(postCustomMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCustomMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
