import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeMetricSetRoute } from '../routes'

const app = new OpenAPIHono()

export const describeMetricSetHandler = app.openapi(postDescribeMetricSetRoute, (c) => {
  throw new Error('Not implemented')
})
