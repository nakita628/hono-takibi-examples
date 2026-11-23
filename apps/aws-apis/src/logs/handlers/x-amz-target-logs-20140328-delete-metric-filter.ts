import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteMetricFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteMetricFilterHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteMetricFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
