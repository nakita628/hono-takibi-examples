import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeInstancesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
