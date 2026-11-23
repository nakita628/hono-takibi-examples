import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
