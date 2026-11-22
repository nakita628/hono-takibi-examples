import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2IntegrationSlackUserBindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const slackIntegrationHandler = app.openapi(
  getApiV2IntegrationSlackUserBindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
