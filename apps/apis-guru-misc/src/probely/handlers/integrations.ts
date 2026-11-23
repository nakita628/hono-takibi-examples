import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntegrationsIndexRoute,
  getIntegrationsJiraCloudProjectsIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
  getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
  getIntegrationsJiraServerProjectsIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute,
  getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
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
