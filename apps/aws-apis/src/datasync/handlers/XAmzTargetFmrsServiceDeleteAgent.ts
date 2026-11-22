import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDeleteAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDeleteAgentHandler = app.openapi(
  postXAmzTargetFmrsServiceDeleteAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
