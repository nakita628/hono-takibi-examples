import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreGetGroupIdRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreGetGroupIdHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreGetGroupIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
