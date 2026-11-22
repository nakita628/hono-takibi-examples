import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeFleetPortSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeFleetPortSettingsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeFleetPortSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
