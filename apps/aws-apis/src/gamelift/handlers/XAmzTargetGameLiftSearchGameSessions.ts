import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftSearchGameSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftSearchGameSessionsHandler = app.openapi(
  postXAmzTargetGameLiftSearchGameSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
