import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328TestMetricFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328TestMetricFilterHandler = app.openapi(
  postXAmzTargetLogs20140328TestMetricFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
