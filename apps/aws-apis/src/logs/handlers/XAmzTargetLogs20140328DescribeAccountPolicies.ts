import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeAccountPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeAccountPoliciesHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeAccountPoliciesRoute,
  (c) => {},
)
