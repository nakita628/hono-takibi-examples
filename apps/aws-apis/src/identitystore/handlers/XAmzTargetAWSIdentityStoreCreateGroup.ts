import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreCreateGroupHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreCreateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
