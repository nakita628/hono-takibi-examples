import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionPlacementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeGameSessionPlacementHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionPlacementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
