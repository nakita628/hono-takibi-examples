import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStopGameSessionPlacementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftStopGameSessionPlacementHandler = app.openapi(
  postXAmzTargetGameLiftStopGameSessionPlacementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
