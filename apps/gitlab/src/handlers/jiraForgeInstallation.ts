import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4IntegrationsJiraForgeInstallationRoute,
  postApiV4IntegrationsJiraForgeInstallationForgeTokenRoute,
  putApiV4IntegrationsJiraForgeInstallationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraForgeInstallationHandler = app
  .openapi(putApiV4IntegrationsJiraForgeInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4IntegrationsJiraForgeInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4IntegrationsJiraForgeInstallationForgeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
