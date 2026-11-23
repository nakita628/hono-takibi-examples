import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionPlacementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameSessionPlacementHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionPlacementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
