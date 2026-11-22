import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeSubscriptionFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeSubscriptionFiltersHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeSubscriptionFiltersRoute,
  (c) => {},
)
