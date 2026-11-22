import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreUpdateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreUpdateGroupHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreUpdateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
