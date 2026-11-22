import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartMetricStreamsRoute, postActionStartMetricStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStartMetricStreamsHandler = app
  .openapi(getActionStartMetricStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartMetricStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
