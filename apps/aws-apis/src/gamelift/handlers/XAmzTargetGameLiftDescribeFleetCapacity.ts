import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetCapacityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeFleetCapacityHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetCapacityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
