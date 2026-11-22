import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeInterconnectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeInterconnectsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeInterconnectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
