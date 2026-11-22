import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreDescribeUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreDescribeUserHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreDescribeUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
