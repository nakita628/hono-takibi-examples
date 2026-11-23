import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribePlayerSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribePlayerSessionsHandler = app.openapi(
  postXAmzTargetGameLiftDescribePlayerSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
