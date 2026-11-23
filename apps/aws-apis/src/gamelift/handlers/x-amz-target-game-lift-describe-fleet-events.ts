import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeFleetEventsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
