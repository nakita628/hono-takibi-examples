import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreGetGroupMembershipIdRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreGetGroupMembershipIdHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreGetGroupMembershipIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
