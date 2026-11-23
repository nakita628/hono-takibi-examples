import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceCreateAgentHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateAgentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
