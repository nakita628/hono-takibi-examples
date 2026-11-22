import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeGameSessionDetailsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
