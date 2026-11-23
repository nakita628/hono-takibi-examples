import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdBackendenvironmentsEnvironmentNameRoute,
  deleteAppsAppIdBranchesBranchNameJobsJobIdRoute,
  deleteAppsAppIdBranchesBranchNameJobsJobIdStopRoute,
  deleteAppsAppIdBranchesBranchNameRoute,
  deleteAppsAppIdDomainsDomainNameRoute,
  deleteAppsAppIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  deleteWebhooksWebhookIdRoute,
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
  getArtifactsArtifactIdRoute,
  getTagsResourceArnRoute,
  getWebhooksWebhookIdRoute,
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
  postTagsResourceArnRoute,
  postWebhooksWebhookIdRoute,
} from './routes'
import {
  deleteAppsAppIdBackendenvironmentsEnvironmentNameRouteHandler,
  deleteAppsAppIdBranchesBranchNameJobsJobIdRouteHandler,
  deleteAppsAppIdBranchesBranchNameJobsJobIdStopRouteHandler,
  deleteAppsAppIdBranchesBranchNameRouteHandler,
  deleteAppsAppIdDomainsDomainNameRouteHandler,
  deleteAppsAppIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  getAppsAppIdBackendenvironmentsEnvironmentNameRouteHandler,
  getAppsAppIdBackendenvironmentsRouteHandler,
  getAppsAppIdBranchesBranchNameJobsJobIdArtifactsRouteHandler,
  getAppsAppIdBranchesBranchNameJobsJobIdRouteHandler,
  getAppsAppIdBranchesBranchNameJobsRouteHandler,
  getAppsAppIdBranchesBranchNameRouteHandler,
  getAppsAppIdBranchesRouteHandler,
  getAppsAppIdDomainsDomainNameRouteHandler,
  getAppsAppIdDomainsRouteHandler,
  getAppsAppIdRouteHandler,
  getAppsAppIdWebhooksRouteHandler,
  getAppsRouteHandler,
  getArtifactsArtifactIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  postAppsAppIdAccesslogsRouteHandler,
  postAppsAppIdBackendenvironmentsRouteHandler,
  postAppsAppIdBranchesBranchNameDeploymentsRouteHandler,
  postAppsAppIdBranchesBranchNameDeploymentsStartRouteHandler,
  postAppsAppIdBranchesBranchNameJobsRouteHandler,
  postAppsAppIdBranchesBranchNameRouteHandler,
  postAppsAppIdBranchesRouteHandler,
  postAppsAppIdDomainsDomainNameRouteHandler,
  postAppsAppIdDomainsRouteHandler,
  postAppsAppIdRouteHandler,
  postAppsAppIdWebhooksRouteHandler,
  postAppsRouteHandler,
  postTagsResourceArnRouteHandler,
  postWebhooksWebhookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAppsRoute, postAppsRouteHandler)
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(postAppsAppIdBackendenvironmentsRoute, postAppsAppIdBackendenvironmentsRouteHandler)
  .openapi(getAppsAppIdBackendenvironmentsRoute, getAppsAppIdBackendenvironmentsRouteHandler)
  .openapi(postAppsAppIdBranchesRoute, postAppsAppIdBranchesRouteHandler)
  .openapi(getAppsAppIdBranchesRoute, getAppsAppIdBranchesRouteHandler)
  .openapi(
    postAppsAppIdBranchesBranchNameDeploymentsRoute,
    postAppsAppIdBranchesBranchNameDeploymentsRouteHandler,
  )
  .openapi(postAppsAppIdDomainsRoute, postAppsAppIdDomainsRouteHandler)
  .openapi(getAppsAppIdDomainsRoute, getAppsAppIdDomainsRouteHandler)
  .openapi(postAppsAppIdWebhooksRoute, postAppsAppIdWebhooksRouteHandler)
  .openapi(getAppsAppIdWebhooksRoute, getAppsAppIdWebhooksRouteHandler)
  .openapi(deleteAppsAppIdRoute, deleteAppsAppIdRouteHandler)
  .openapi(getAppsAppIdRoute, getAppsAppIdRouteHandler)
  .openapi(postAppsAppIdRoute, postAppsAppIdRouteHandler)
  .openapi(
    deleteAppsAppIdBackendenvironmentsEnvironmentNameRoute,
    deleteAppsAppIdBackendenvironmentsEnvironmentNameRouteHandler,
  )
  .openapi(
    getAppsAppIdBackendenvironmentsEnvironmentNameRoute,
    getAppsAppIdBackendenvironmentsEnvironmentNameRouteHandler,
  )
  .openapi(deleteAppsAppIdBranchesBranchNameRoute, deleteAppsAppIdBranchesBranchNameRouteHandler)
  .openapi(getAppsAppIdBranchesBranchNameRoute, getAppsAppIdBranchesBranchNameRouteHandler)
  .openapi(postAppsAppIdBranchesBranchNameRoute, postAppsAppIdBranchesBranchNameRouteHandler)
  .openapi(deleteAppsAppIdDomainsDomainNameRoute, deleteAppsAppIdDomainsDomainNameRouteHandler)
  .openapi(getAppsAppIdDomainsDomainNameRoute, getAppsAppIdDomainsDomainNameRouteHandler)
  .openapi(postAppsAppIdDomainsDomainNameRoute, postAppsAppIdDomainsDomainNameRouteHandler)
  .openapi(
    deleteAppsAppIdBranchesBranchNameJobsJobIdRoute,
    deleteAppsAppIdBranchesBranchNameJobsJobIdRouteHandler,
  )
  .openapi(
    getAppsAppIdBranchesBranchNameJobsJobIdRoute,
    getAppsAppIdBranchesBranchNameJobsJobIdRouteHandler,
  )
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(postWebhooksWebhookIdRoute, postWebhooksWebhookIdRouteHandler)
  .openapi(postAppsAppIdAccesslogsRoute, postAppsAppIdAccesslogsRouteHandler)
  .openapi(getArtifactsArtifactIdRoute, getArtifactsArtifactIdRouteHandler)
  .openapi(
    getAppsAppIdBranchesBranchNameJobsJobIdArtifactsRoute,
    getAppsAppIdBranchesBranchNameJobsJobIdArtifactsRouteHandler,
  )
  .openapi(getAppsAppIdBranchesBranchNameJobsRoute, getAppsAppIdBranchesBranchNameJobsRouteHandler)
  .openapi(
    postAppsAppIdBranchesBranchNameJobsRoute,
    postAppsAppIdBranchesBranchNameJobsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postAppsAppIdBranchesBranchNameDeploymentsStartRoute,
    postAppsAppIdBranchesBranchNameDeploymentsStartRouteHandler,
  )
  .openapi(
    deleteAppsAppIdBranchesBranchNameJobsJobIdStopRoute,
    deleteAppsAppIdBranchesBranchNameJobsJobIdStopRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
