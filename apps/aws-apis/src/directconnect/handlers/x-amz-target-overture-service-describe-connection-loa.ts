import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeConnectionLoaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeConnectionLoaHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeConnectionLoaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
