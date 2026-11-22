import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreDescribeGroupMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreDescribeGroupMembershipHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreDescribeGroupMembershipRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
