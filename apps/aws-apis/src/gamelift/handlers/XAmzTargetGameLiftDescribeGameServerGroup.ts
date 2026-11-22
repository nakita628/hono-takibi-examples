import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameServerGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeGameServerGroupHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameServerGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
