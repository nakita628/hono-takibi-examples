import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListMetricsRoute, postActionListMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListMetricsHandler = app
  .openapi(getActionListMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
