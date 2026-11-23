import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeAccountPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeAccountPoliciesHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeAccountPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
