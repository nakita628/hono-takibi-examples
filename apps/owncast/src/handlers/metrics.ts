import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetricsCmcdRoute,
  optionsMetricsCmcdRoute,
  postMetricsCmcdRoute,
  postMetricsPlaybackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(postMetricsCmcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsCmcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsMetricsCmcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
