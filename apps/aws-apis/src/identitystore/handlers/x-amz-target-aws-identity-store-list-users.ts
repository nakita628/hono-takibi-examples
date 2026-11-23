import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreListUsersHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
