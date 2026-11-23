import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeRouterConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeRouterConfigurationHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeRouterConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
