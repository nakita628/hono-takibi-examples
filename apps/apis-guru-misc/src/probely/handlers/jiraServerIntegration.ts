import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntegrationsJiraServerProjectsIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
  getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
  getTargetsTargetIdIntegrationsJiraServerIndexRoute,
  patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
  patchTargetsTargetIdIntegrationsJiraServerIndexRoute,
  putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute,
  putTargetsTargetIdIntegrationsJiraServerIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraServerIntegrationHandler = app
  .openapi(getIntegrationsJiraServerProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdIntegrationsJiraServerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
