import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionQueuesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameSessionQueuesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionQueuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
