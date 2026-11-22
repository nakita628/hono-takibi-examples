import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDescribeGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
