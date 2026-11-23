import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemHealthRoute,
  getSystemMetricsMetricIdRoute,
  getSystemMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemMetricsMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
