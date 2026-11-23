import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeMetricFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeMetricFiltersHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeMetricFiltersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
