import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeInterconnectsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeInterconnectsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeInterconnectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
