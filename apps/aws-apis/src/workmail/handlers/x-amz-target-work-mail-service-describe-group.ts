import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
