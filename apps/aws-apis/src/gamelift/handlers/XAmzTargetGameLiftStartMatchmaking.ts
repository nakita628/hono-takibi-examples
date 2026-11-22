import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStartMatchmakingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftStartMatchmakingHandler = app.openapi(
  postXAmzTargetGameLiftStartMatchmakingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
