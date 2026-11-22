import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceUpdateAgentHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
