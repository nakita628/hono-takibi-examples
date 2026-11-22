import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeMetricFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeMetricFiltersHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeMetricFiltersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
