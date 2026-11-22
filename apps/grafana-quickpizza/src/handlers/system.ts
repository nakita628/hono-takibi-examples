import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiConfigRoute, getHealthzRoute, getMetricsRoute, getReadyRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getApiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
