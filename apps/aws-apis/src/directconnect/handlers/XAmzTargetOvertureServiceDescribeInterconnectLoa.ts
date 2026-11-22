import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeInterconnectLoaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeInterconnectLoaHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeInterconnectLoaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
