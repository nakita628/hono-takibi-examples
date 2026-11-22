import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetricsCurrentInstanceIdRoute,
  postMetricsDataRoute,
  postMetricsHistoricalInstanceIdRoute,
  postMetricsUserdataInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(postMetricsCurrentInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsUserdataInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsHistoricalInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsDataRoute, (c) => {
    throw new Error('Not implemented')
  })
