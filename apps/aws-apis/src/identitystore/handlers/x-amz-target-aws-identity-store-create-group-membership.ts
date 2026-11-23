import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreCreateGroupMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreCreateGroupMembershipHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreCreateGroupMembershipRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
