import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreDescribeGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreDescribeGroupHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreDescribeGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
