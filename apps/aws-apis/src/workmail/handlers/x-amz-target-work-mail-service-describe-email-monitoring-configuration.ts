import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeEmailMonitoringConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
