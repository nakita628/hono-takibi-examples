import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreCreateUserHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
