import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreGetGroupIdRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreGetGroupIdHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreGetGroupIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
