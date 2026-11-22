import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreDeleteGroupHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreDeleteGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
