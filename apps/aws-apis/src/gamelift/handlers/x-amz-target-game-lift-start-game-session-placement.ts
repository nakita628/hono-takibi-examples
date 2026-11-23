import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStartGameSessionPlacementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStartGameSessionPlacementHandler = app.openapi(
  postXAmzTargetGameLiftStartGameSessionPlacementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
