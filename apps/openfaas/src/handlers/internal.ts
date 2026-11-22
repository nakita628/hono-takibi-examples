import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthzRoute, getMetricsRoute, postSystemAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app
  .openapi(getHealthzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
