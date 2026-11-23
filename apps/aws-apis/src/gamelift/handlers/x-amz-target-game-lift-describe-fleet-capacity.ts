import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetCapacityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeFleetCapacityHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetCapacityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
