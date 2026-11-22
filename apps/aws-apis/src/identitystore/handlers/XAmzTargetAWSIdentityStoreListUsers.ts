import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreListUsersHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
