import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeSubscriptionFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeSubscriptionFiltersHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeSubscriptionFiltersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
