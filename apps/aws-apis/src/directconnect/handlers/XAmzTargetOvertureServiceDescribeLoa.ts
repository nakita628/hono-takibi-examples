import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeLoaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeLoaHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeLoaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
