import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreDeleteUserHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
