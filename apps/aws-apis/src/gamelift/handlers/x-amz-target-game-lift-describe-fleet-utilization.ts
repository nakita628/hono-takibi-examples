import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetUtilizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeFleetUtilizationHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetUtilizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
