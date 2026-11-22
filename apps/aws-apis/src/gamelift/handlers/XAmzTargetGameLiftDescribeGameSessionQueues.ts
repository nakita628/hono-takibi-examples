import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionQueuesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeGameSessionQueuesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionQueuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
