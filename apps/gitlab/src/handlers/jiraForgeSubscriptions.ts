import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4IntegrationsJiraForgeSubscriptionsIdRoute,
  getApiV4IntegrationsJiraForgeSubscriptionsRoute,
  postApiV4IntegrationsJiraForgeSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraForgeSubscriptionsHandler = app
  .openapi(postApiV4IntegrationsJiraForgeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4IntegrationsJiraForgeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4IntegrationsJiraForgeSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
