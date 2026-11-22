import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2IntegrationAwsLogsServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const awsLogsIntegrationHandler = app.openapi(
  getApiV2IntegrationAwsLogsServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
