import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetLocationCapacityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeFleetLocationCapacityHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetLocationCapacityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
