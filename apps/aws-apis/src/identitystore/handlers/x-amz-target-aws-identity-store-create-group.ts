import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreCreateGroupHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreCreateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
