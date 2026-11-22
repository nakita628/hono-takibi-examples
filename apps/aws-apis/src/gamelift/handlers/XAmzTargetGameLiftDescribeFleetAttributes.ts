import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeFleetAttributesHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
