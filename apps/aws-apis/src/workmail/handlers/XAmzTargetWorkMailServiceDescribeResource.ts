import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDescribeResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
