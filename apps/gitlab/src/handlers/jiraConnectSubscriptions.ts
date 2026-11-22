import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4IntegrationsJiraConnectSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const jiraConnectSubscriptionsHandler = app.openapi(
  postApiV4IntegrationsJiraConnectSubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
