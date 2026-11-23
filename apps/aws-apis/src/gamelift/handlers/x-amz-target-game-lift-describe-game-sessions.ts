import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameSessionsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
