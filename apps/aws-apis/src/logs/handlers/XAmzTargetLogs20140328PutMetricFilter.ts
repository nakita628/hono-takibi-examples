import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutMetricFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutMetricFilterHandler = app.openapi(
  postXAmzTargetLogs20140328PutMetricFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
