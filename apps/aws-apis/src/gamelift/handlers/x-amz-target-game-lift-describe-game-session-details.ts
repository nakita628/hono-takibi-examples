import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameSessionDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameSessionDetailsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameSessionDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
