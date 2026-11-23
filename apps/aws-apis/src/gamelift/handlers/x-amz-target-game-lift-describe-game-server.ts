import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameServerHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
