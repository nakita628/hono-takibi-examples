import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
