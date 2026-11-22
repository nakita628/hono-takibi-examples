import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeGameServerInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeGameServerInstancesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeGameServerInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
