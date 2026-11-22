import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeRuntimeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeRuntimeConfigurationHandler = app.openapi(
  postXAmzTargetGameLiftDescribeRuntimeConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
