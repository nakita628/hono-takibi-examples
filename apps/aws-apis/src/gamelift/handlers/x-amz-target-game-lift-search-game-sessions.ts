import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftSearchGameSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftSearchGameSessionsHandler = app.openapi(
  postXAmzTargetGameLiftSearchGameSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
