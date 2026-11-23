import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeResourcePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeResourcePoliciesHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeResourcePoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
