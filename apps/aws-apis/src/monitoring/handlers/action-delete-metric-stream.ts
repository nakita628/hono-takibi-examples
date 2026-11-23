import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteMetricStreamRoute, postActionDeleteMetricStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteMetricStreamHandler = app
  .openapi(getActionDeleteMetricStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteMetricStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
