import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDeleteAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDeleteAgentHandler = app.openapi(
  postXAmzTargetFmrsServiceDeleteAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
