import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDescribeUserHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
