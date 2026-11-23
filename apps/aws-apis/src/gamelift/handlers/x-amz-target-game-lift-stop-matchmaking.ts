import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStopMatchmakingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStopMatchmakingHandler = app.openapi(
  postXAmzTargetGameLiftStopMatchmakingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
