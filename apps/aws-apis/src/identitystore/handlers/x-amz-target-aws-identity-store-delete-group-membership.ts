import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreDeleteGroupMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreDeleteGroupMembershipHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreDeleteGroupMembershipRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
