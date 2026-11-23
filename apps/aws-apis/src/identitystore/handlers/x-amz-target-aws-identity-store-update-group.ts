import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreUpdateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreUpdateGroupHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreUpdateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
