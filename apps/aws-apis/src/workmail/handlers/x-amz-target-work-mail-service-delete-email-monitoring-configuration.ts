import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteEmailMonitoringConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
