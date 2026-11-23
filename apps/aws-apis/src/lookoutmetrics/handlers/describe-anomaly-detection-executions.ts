import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeAnomalyDetectionExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeAnomalyDetectionExecutionsHandler = app.openapi(
  postDescribeAnomalyDetectionExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
