import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeComputeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeComputeHandler = app.openapi(
  postXAmzTargetGameLiftDescribeComputeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
