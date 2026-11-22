import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreListGroupMembershipsForMemberHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
