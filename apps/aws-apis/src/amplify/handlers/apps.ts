import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdBackendenvironmentsEnvironmentNameRoute,
  deleteAppsAppIdBranchesBranchNameJobsJobIdRoute,
  deleteAppsAppIdBranchesBranchNameJobsJobIdStopRoute,
  deleteAppsAppIdBranchesBranchNameRoute,
  deleteAppsAppIdDomainsDomainNameRoute,
  deleteAppsAppIdRoute,
  getAppsAppIdBackendenvironmentsEnvironmentNameRoute,
  getAppsAppIdBackendenvironmentsRoute,
  getAppsAppIdBranchesBranchNameJobsJobIdArtifactsRoute,
  getAppsAppIdBranchesBranchNameJobsJobIdRoute,
  getAppsAppIdBranchesBranchNameJobsRoute,
  getAppsAppIdBranchesBranchNameRoute,
  getAppsAppIdBranchesRoute,
  getAppsAppIdDomainsDomainNameRoute,
  getAppsAppIdDomainsRoute,
  getAppsAppIdRoute,
  getAppsAppIdWebhooksRoute,
  getAppsRoute,
  postAppsAppIdAccesslogsRoute,
  postAppsAppIdBackendenvironmentsRoute,
  postAppsAppIdBranchesBranchNameDeploymentsRoute,
  postAppsAppIdBranchesBranchNameDeploymentsStartRoute,
  postAppsAppIdBranchesBranchNameJobsRoute,
  postAppsAppIdBranchesBranchNameRoute,
  postAppsAppIdBranchesRoute,
  postAppsAppIdDomainsDomainNameRoute,
  postAppsAppIdDomainsRoute,
  postAppsAppIdRoute,
  postAppsAppIdWebhooksRoute,
  postAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(postAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBackendenvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBackendenvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBranchesBranchNameDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBackendenvironmentsEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBackendenvironmentsEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBranchesBranchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBranchesBranchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBranchesBranchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBranchesBranchNameJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBranchesBranchNameJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccesslogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBranchesBranchNameJobsJobIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBranchesBranchNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBranchesBranchNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBranchesBranchNameDeploymentsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBranchesBranchNameJobsJobIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
