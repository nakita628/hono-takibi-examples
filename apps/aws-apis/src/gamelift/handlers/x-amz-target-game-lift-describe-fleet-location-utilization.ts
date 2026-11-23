import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetLocationUtilizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeFleetLocationUtilizationHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetLocationUtilizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
