import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameServerInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeGameServerInstancesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameServerInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
