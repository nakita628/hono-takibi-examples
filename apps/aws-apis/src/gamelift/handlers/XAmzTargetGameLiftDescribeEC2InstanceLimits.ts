import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeEC2InstanceLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeEC2InstanceLimitsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeEC2InstanceLimitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
