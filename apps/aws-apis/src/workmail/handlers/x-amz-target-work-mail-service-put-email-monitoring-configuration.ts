import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServicePutEmailMonitoringConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServicePutEmailMonitoringConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServicePutEmailMonitoringConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
