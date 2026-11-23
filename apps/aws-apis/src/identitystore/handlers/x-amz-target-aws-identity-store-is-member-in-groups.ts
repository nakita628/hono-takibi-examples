import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreIsMemberInGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreIsMemberInGroupsHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreIsMemberInGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
