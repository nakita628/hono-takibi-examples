import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStartMatchmakingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStartMatchmakingHandler = app.openapi(
  postXAmzTargetGameLiftStartMatchmakingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
