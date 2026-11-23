import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceListAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceListAgentsHandler = app.openapi(
  postXAmzTargetFmrsServiceListAgentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
