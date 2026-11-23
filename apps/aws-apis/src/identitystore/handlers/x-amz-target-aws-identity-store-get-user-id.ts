import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreGetUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreGetUserIdHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreGetUserIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
