import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4VulnerabilitiesIdIssueLinksIssueLinkIdRoute,
  getApiV4ProjectsIdVulnerabilitiesRoute,
  getApiV4ProjectsIdVulnerabilityFindingsRoute,
  getApiV4SecurityVulnerabilityArchiveExportsIdDownloadRoute,
  getApiV4SecurityVulnerabilityArchiveExportsIdRoute,
  getApiV4SecurityVulnerabilityExportsIdDownloadRoute,
  getApiV4SecurityVulnerabilityExportsIdRoute,
  getApiV4VulnerabilitiesIdIssueLinksRoute,
  getApiV4VulnerabilitiesIdRoute,
  postApiV4ProjectsIdVulnerabilitiesRoute,
  postApiV4SecurityGroupsIdVulnerabilityExportsRoute,
  postApiV4SecurityProjectsIdVulnerabilityArchiveExportsRoute,
  postApiV4SecurityProjectsIdVulnerabilityExportsRoute,
  postApiV4SecurityVulnerabilityExportsRoute,
  postApiV4VulnerabilitiesIdConfirmRoute,
  postApiV4VulnerabilitiesIdDismissRoute,
  postApiV4VulnerabilitiesIdIssueLinksRoute,
  postApiV4VulnerabilitiesIdResolveRoute,
  postApiV4VulnerabilitiesIdRevertRoute,
  postApiV4VulnerabilitiesVulnerabilityIdFlagsAiDetectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vulnerabilitiesHandler = app
  .openapi(postApiV4SecurityProjectsIdVulnerabilityExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SecurityGroupsIdVulnerabilityExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SecurityVulnerabilityExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SecurityVulnerabilityExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SecurityVulnerabilityExportsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SecurityProjectsIdVulnerabilityArchiveExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SecurityVulnerabilityArchiveExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SecurityVulnerabilityArchiveExportsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VulnerabilitiesIdIssueLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VulnerabilitiesIdIssueLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4VulnerabilitiesIdIssueLinksIssueLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdVulnerabilityFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VulnerabilitiesVulnerabilityIdFlagsAiDetectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VulnerabilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VulnerabilitiesIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VulnerabilitiesIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VulnerabilitiesIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VulnerabilitiesIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
