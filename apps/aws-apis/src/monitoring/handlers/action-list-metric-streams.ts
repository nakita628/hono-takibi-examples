import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListMetricStreamsRoute, postActionListMetricStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListMetricStreamsHandler = app
  .openapi(getActionListMetricStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListMetricStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
