import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStopMetricStreamsRoute, postActionStopMetricStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStopMetricStreamsHandler = app
  .openapi(getActionStopMetricStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopMetricStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
