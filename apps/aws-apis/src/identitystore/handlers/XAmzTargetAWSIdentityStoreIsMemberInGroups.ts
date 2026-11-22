import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreIsMemberInGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreIsMemberInGroupsHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreIsMemberInGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
