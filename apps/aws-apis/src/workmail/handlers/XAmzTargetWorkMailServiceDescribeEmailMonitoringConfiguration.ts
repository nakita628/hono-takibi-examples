import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
