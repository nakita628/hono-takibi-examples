import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreCreateGroupMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreCreateGroupMembershipHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreCreateGroupMembershipRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
