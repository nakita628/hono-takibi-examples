import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeResourcePolicyHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
