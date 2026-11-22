import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntegrationsJiraCloudProjectsIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
  getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
  getTargetsTargetIdIntegrationsJiraCloudIndexRoute,
  patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
  patchTargetsTargetIdIntegrationsJiraCloudIndexRoute,
  putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute,
  putTargetsTargetIdIntegrationsJiraCloudIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jiraCloudIntegrationHandler = app
  .openapi(getIntegrationsJiraCloudProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdIntegrationsJiraCloudIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
