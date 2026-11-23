import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetLocationAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeFleetLocationAttributesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetLocationAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
