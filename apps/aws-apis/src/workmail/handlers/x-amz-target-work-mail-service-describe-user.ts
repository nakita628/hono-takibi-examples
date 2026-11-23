import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeUserHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
