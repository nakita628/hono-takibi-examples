import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV4IntegrationsJiraForgeUserDelegationRoute } from '../routes'

const app = new OpenAPIHono()

export const jiraForgeUserDelegationHandler = app.openapi(
  postApiV4IntegrationsJiraForgeUserDelegationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
