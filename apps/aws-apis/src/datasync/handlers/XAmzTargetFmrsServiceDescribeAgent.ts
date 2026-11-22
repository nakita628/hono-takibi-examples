import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeAgentHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
