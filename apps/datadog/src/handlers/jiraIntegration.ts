import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationJiraAccountsAccountIdRoute,
  deleteApiV2IntegrationJiraIssueTemplatesIssueTemplateIdRoute,
  getApiV2IntegrationJiraAccountsRoute,
  getApiV2IntegrationJiraIssueTemplatesIssueTemplateIdRoute,
  getApiV2IntegrationJiraIssueTemplatesRoute,
  patchApiV2IntegrationJiraIssueTemplatesIssueTemplateIdRoute,
  postApiV2IntegrationJiraIssueTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraIntegrationHandler = app
  .openapi(getApiV2IntegrationJiraAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationJiraAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationJiraIssueTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationJiraIssueTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationJiraIssueTemplatesIssueTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationJiraIssueTemplatesIssueTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationJiraIssueTemplatesIssueTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
