import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateAgentHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
