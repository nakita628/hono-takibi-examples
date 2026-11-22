import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeAnomalyDetectorHandler = app.openapi(postDescribeAnomalyDetectorRoute, (c) => {
  throw new Error('Not implemented')
})
