import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStopGameSessionPlacementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStopGameSessionPlacementHandler = app.openapi(
  postXAmzTargetGameLiftStopGameSessionPlacementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
