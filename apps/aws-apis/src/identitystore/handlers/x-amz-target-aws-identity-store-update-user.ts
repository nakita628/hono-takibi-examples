import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreUpdateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreUpdateUserHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreUpdateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
