import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreListGroupMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreListGroupMembershipsHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreListGroupMembershipsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
