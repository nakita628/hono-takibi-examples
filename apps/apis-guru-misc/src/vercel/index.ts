import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEdgeConfigEdgeConfigIdRoute,
  deleteEdgeConfigEdgeConfigIdTokensRoute,
  deleteV13DeploymentsIdRoute,
  deleteV1IntegrationsConfigurationIdRoute,
  deleteV1IntegrationsLogDrainsIdRoute,
  deleteV1LogDrainsIdRoute,
  deleteV1TeamsTeamIdInvitesInviteIdRoute,
  deleteV1TeamsTeamIdMembersUidRoute,
  deleteV1TeamsTeamIdRoute,
  deleteV1UserRoute,
  deleteV1WebhooksIdRoute,
  deleteV2AliasesAliasIdRoute,
  deleteV2DomainsDomainRecordsRecordIdRoute,
  deleteV2SecretsIdOrNameRoute,
  deleteV3UserTokensTokenIdRoute,
  deleteV6DomainsDomainRoute,
  deleteV7CertsIdRoute,
  deleteV9ProjectsIdOrNameDomainsDomainRoute,
  deleteV9ProjectsIdOrNameEnvIdRoute,
  deleteV9ProjectsIdOrNameRoute,
  getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRoute,
  getEdgeConfigEdgeConfigIdItemsRoute,
  getEdgeConfigEdgeConfigIdRoute,
  getEdgeConfigEdgeConfigIdTokensRoute,
  getEdgeConfigEdgeConfigIdTokenTokenRoute,
  getEdgeConfigRoute,
  getRegistrationVerifyRoute,
  getV11DeploymentsDeploymentIdBuildsRoute,
  getV13DeploymentsIdOrUrlRoute,
  getV1DeploymentsDeploymentIdChecksCheckIdRoute,
  getV1DeploymentsDeploymentIdChecksRoute,
  getV1IntegrationsConfigurationIdRoute,
  getV1IntegrationsConfigurationsRoute,
  getV1IntegrationsGitNamespacesRoute,
  getV1IntegrationsSearchRepoRoute,
  getV1LogDrainsIdRoute,
  getV1LogDrainsRoute,
  getV1ProjectsIdOrNameEnvIdRoute,
  getV1TeamsTeamIdRequestUserIdRoute,
  getV1WebhooksIdRoute,
  getV1WebhooksRoute,
  getV2DeploymentsIdAliasesRoute,
  getV2DeploymentsIdOrUrlEventsRoute,
  getV2IntegrationsLogDrainsRoute,
  getV2TeamsRoute,
  getV2TeamsTeamIdMembersRoute,
  getV2TeamsTeamIdRoute,
  getV2UserRoute,
  getV3EventsRoute,
  getV3SecretsIdOrNameRoute,
  getV3SecretsRoute,
  getV4AliasesIdOrAliasRoute,
  getV4AliasesRoute,
  getV4DomainsDomainRecordsRoute,
  getV4DomainsPriceRoute,
  getV4DomainsStatusRoute,
  getV5DomainsDomainRoute,
  getV5DomainsRoute,
  getV5UserTokensRoute,
  getV5UserTokensTokenIdRoute,
  getV6DeploymentsIdFilesFileIdRoute,
  getV6DeploymentsIdFilesRoute,
  getV6DeploymentsRoute,
  getV6DomainsDomainConfigRoute,
  getV7CertsIdRoute,
  getV8ArtifactsHashRoute,
  getV8ArtifactsStatusRoute,
  getV9ProjectsIdOrNameDomainsDomainRoute,
  getV9ProjectsIdOrNameDomainsRoute,
  getV9ProjectsIdOrNameEnvRoute,
  getV9ProjectsIdOrNameRoute,
  getV9ProjectsRoute,
  headV8ArtifactsHashRoute,
  patchEdgeConfigEdgeConfigIdItemsRoute,
  patchV12DeploymentsIdCancelRoute,
  patchV1DeploymentsDeploymentIdChecksCheckIdRoute,
  patchV1DomainsRecordsRecordIdRoute,
  patchV1TeamsTeamIdMembersUidRoute,
  patchV2SecretsNameRoute,
  patchV2TeamsTeamIdRoute,
  patchV9ProjectsIdOrNameDomainsDomainRoute,
  patchV9ProjectsIdOrNameEnvIdRoute,
  patchV9ProjectsIdOrNameRoute,
  postEdgeConfigEdgeConfigIdTokenRoute,
  postEdgeConfigRoute,
  postRegistrationRoute,
  postV10ProjectsIdOrNameEnvRoute,
  postV13DeploymentsRoute,
  postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute,
  postV1DeploymentsDeploymentIdChecksRoute,
  postV1LogDrainsRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdMembersRoute,
  postV1TeamsTeamIdMembersTeamsJoinRoute,
  postV1TeamsTeamIdRequestRoute,
  postV1WebhooksRoute,
  postV2DeploymentsIdAliasesRoute,
  postV2DomainsDomainRecordsRoute,
  postV2FilesRoute,
  postV2IntegrationsLogDrainsRoute,
  postV2SecretsNameRoute,
  postV3UserTokensRoute,
  postV4DomainsBuyRoute,
  postV4DomainsRoute,
  postV7CertsRoute,
  postV8ArtifactsEventsRoute,
  postV8ArtifactsRoute,
  postV9ProjectsIdOrNameDomainsDomainVerifyRoute,
  postV9ProjectsIdOrNameDomainsRoute,
  postV9ProjectsRoute,
  putEdgeConfigEdgeConfigIdRoute,
  putV7CertsRoute,
  putV8ArtifactsHashRoute,
} from './routes'
import {
  deleteEdgeConfigEdgeConfigIdRouteHandler,
  deleteEdgeConfigEdgeConfigIdTokensRouteHandler,
  deleteV13DeploymentsIdRouteHandler,
  deleteV1IntegrationsConfigurationIdRouteHandler,
  deleteV1IntegrationsLogDrainsIdRouteHandler,
  deleteV1LogDrainsIdRouteHandler,
  deleteV1TeamsTeamIdInvitesInviteIdRouteHandler,
  deleteV1TeamsTeamIdMembersUidRouteHandler,
  deleteV1TeamsTeamIdRouteHandler,
  deleteV1UserRouteHandler,
  deleteV1WebhooksIdRouteHandler,
  deleteV2AliasesAliasIdRouteHandler,
  deleteV2DomainsDomainRecordsRecordIdRouteHandler,
  deleteV2SecretsIdOrNameRouteHandler,
  deleteV3UserTokensTokenIdRouteHandler,
  deleteV6DomainsDomainRouteHandler,
  deleteV7CertsIdRouteHandler,
  deleteV9ProjectsIdOrNameDomainsDomainRouteHandler,
  deleteV9ProjectsIdOrNameEnvIdRouteHandler,
  deleteV9ProjectsIdOrNameRouteHandler,
  getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRouteHandler,
  getEdgeConfigEdgeConfigIdItemsRouteHandler,
  getEdgeConfigEdgeConfigIdRouteHandler,
  getEdgeConfigEdgeConfigIdTokensRouteHandler,
  getEdgeConfigEdgeConfigIdTokenTokenRouteHandler,
  getEdgeConfigRouteHandler,
  getRegistrationVerifyRouteHandler,
  getV11DeploymentsDeploymentIdBuildsRouteHandler,
  getV13DeploymentsIdOrUrlRouteHandler,
  getV1DeploymentsDeploymentIdChecksCheckIdRouteHandler,
  getV1DeploymentsDeploymentIdChecksRouteHandler,
  getV1IntegrationsConfigurationIdRouteHandler,
  getV1IntegrationsConfigurationsRouteHandler,
  getV1IntegrationsGitNamespacesRouteHandler,
  getV1IntegrationsSearchRepoRouteHandler,
  getV1LogDrainsIdRouteHandler,
  getV1LogDrainsRouteHandler,
  getV1ProjectsIdOrNameEnvIdRouteHandler,
  getV1TeamsTeamIdRequestUserIdRouteHandler,
  getV1WebhooksIdRouteHandler,
  getV1WebhooksRouteHandler,
  getV2DeploymentsIdAliasesRouteHandler,
  getV2DeploymentsIdOrUrlEventsRouteHandler,
  getV2IntegrationsLogDrainsRouteHandler,
  getV2TeamsRouteHandler,
  getV2TeamsTeamIdMembersRouteHandler,
  getV2TeamsTeamIdRouteHandler,
  getV2UserRouteHandler,
  getV3EventsRouteHandler,
  getV3SecretsIdOrNameRouteHandler,
  getV3SecretsRouteHandler,
  getV4AliasesIdOrAliasRouteHandler,
  getV4AliasesRouteHandler,
  getV4DomainsDomainRecordsRouteHandler,
  getV4DomainsPriceRouteHandler,
  getV4DomainsStatusRouteHandler,
  getV5DomainsDomainRouteHandler,
  getV5DomainsRouteHandler,
  getV5UserTokensRouteHandler,
  getV5UserTokensTokenIdRouteHandler,
  getV6DeploymentsIdFilesFileIdRouteHandler,
  getV6DeploymentsIdFilesRouteHandler,
  getV6DeploymentsRouteHandler,
  getV6DomainsDomainConfigRouteHandler,
  getV7CertsIdRouteHandler,
  getV8ArtifactsHashRouteHandler,
  getV8ArtifactsStatusRouteHandler,
  getV9ProjectsIdOrNameDomainsDomainRouteHandler,
  getV9ProjectsIdOrNameDomainsRouteHandler,
  getV9ProjectsIdOrNameEnvRouteHandler,
  getV9ProjectsIdOrNameRouteHandler,
  getV9ProjectsRouteHandler,
  headV8ArtifactsHashRouteHandler,
  patchEdgeConfigEdgeConfigIdItemsRouteHandler,
  patchV12DeploymentsIdCancelRouteHandler,
  patchV1DeploymentsDeploymentIdChecksCheckIdRouteHandler,
  patchV1DomainsRecordsRecordIdRouteHandler,
  patchV1TeamsTeamIdMembersUidRouteHandler,
  patchV2SecretsNameRouteHandler,
  patchV2TeamsTeamIdRouteHandler,
  patchV9ProjectsIdOrNameDomainsDomainRouteHandler,
  patchV9ProjectsIdOrNameEnvIdRouteHandler,
  patchV9ProjectsIdOrNameRouteHandler,
  postEdgeConfigEdgeConfigIdTokenRouteHandler,
  postEdgeConfigRouteHandler,
  postRegistrationRouteHandler,
  postV10ProjectsIdOrNameEnvRouteHandler,
  postV13DeploymentsRouteHandler,
  postV1DeploymentsDeploymentIdChecksCheckIdRerequestRouteHandler,
  postV1DeploymentsDeploymentIdChecksRouteHandler,
  postV1LogDrainsRouteHandler,
  postV1TeamsRouteHandler,
  postV1TeamsTeamIdMembersRouteHandler,
  postV1TeamsTeamIdMembersTeamsJoinRouteHandler,
  postV1TeamsTeamIdRequestRouteHandler,
  postV1WebhooksRouteHandler,
  postV2DeploymentsIdAliasesRouteHandler,
  postV2DomainsDomainRecordsRouteHandler,
  postV2FilesRouteHandler,
  postV2IntegrationsLogDrainsRouteHandler,
  postV2SecretsNameRouteHandler,
  postV3UserTokensRouteHandler,
  postV4DomainsBuyRouteHandler,
  postV4DomainsRouteHandler,
  postV7CertsRouteHandler,
  postV8ArtifactsEventsRouteHandler,
  postV8ArtifactsRouteHandler,
  postV9ProjectsIdOrNameDomainsDomainVerifyRouteHandler,
  postV9ProjectsIdOrNameDomainsRouteHandler,
  postV9ProjectsRouteHandler,
  putEdgeConfigEdgeConfigIdRouteHandler,
  putV7CertsRouteHandler,
  putV8ArtifactsHashRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEdgeConfigRoute, getEdgeConfigRouteHandler)
  .openapi(postEdgeConfigRoute, postEdgeConfigRouteHandler)
  .openapi(deleteEdgeConfigEdgeConfigIdRoute, deleteEdgeConfigEdgeConfigIdRouteHandler)
  .openapi(getEdgeConfigEdgeConfigIdRoute, getEdgeConfigEdgeConfigIdRouteHandler)
  .openapi(putEdgeConfigEdgeConfigIdRoute, putEdgeConfigEdgeConfigIdRouteHandler)
  .openapi(
    getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRoute,
    getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRouteHandler,
  )
  .openapi(getEdgeConfigEdgeConfigIdItemsRoute, getEdgeConfigEdgeConfigIdItemsRouteHandler)
  .openapi(patchEdgeConfigEdgeConfigIdItemsRoute, patchEdgeConfigEdgeConfigIdItemsRouteHandler)
  .openapi(postEdgeConfigEdgeConfigIdTokenRoute, postEdgeConfigEdgeConfigIdTokenRouteHandler)
  .openapi(
    getEdgeConfigEdgeConfigIdTokenTokenRoute,
    getEdgeConfigEdgeConfigIdTokenTokenRouteHandler,
  )
  .openapi(deleteEdgeConfigEdgeConfigIdTokensRoute, deleteEdgeConfigEdgeConfigIdTokensRouteHandler)
  .openapi(getEdgeConfigEdgeConfigIdTokensRoute, getEdgeConfigEdgeConfigIdTokensRouteHandler)
  .openapi(postRegistrationRoute, postRegistrationRouteHandler)
  .openapi(getRegistrationVerifyRoute, getRegistrationVerifyRouteHandler)
  .openapi(getV1DeploymentsDeploymentIdChecksRoute, getV1DeploymentsDeploymentIdChecksRouteHandler)
  .openapi(
    postV1DeploymentsDeploymentIdChecksRoute,
    postV1DeploymentsDeploymentIdChecksRouteHandler,
  )
  .openapi(
    getV1DeploymentsDeploymentIdChecksCheckIdRoute,
    getV1DeploymentsDeploymentIdChecksCheckIdRouteHandler,
  )
  .openapi(
    patchV1DeploymentsDeploymentIdChecksCheckIdRoute,
    patchV1DeploymentsDeploymentIdChecksCheckIdRouteHandler,
  )
  .openapi(
    postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute,
    postV1DeploymentsDeploymentIdChecksCheckIdRerequestRouteHandler,
  )
  .openapi(patchV1DomainsRecordsRecordIdRoute, patchV1DomainsRecordsRecordIdRouteHandler)
  .openapi(
    deleteV1IntegrationsConfigurationIdRoute,
    deleteV1IntegrationsConfigurationIdRouteHandler,
  )
  .openapi(getV1IntegrationsConfigurationIdRoute, getV1IntegrationsConfigurationIdRouteHandler)
  .openapi(getV1IntegrationsConfigurationsRoute, getV1IntegrationsConfigurationsRouteHandler)
  .openapi(getV1IntegrationsGitNamespacesRoute, getV1IntegrationsGitNamespacesRouteHandler)
  .openapi(deleteV1IntegrationsLogDrainsIdRoute, deleteV1IntegrationsLogDrainsIdRouteHandler)
  .openapi(getV1IntegrationsSearchRepoRoute, getV1IntegrationsSearchRepoRouteHandler)
  .openapi(getV1LogDrainsRoute, getV1LogDrainsRouteHandler)
  .openapi(postV1LogDrainsRoute, postV1LogDrainsRouteHandler)
  .openapi(deleteV1LogDrainsIdRoute, deleteV1LogDrainsIdRouteHandler)
  .openapi(getV1LogDrainsIdRoute, getV1LogDrainsIdRouteHandler)
  .openapi(getV1ProjectsIdOrNameEnvIdRoute, getV1ProjectsIdOrNameEnvIdRouteHandler)
  .openapi(postV1TeamsRoute, postV1TeamsRouteHandler)
  .openapi(deleteV1TeamsTeamIdRoute, deleteV1TeamsTeamIdRouteHandler)
  .openapi(deleteV1TeamsTeamIdInvitesInviteIdRoute, deleteV1TeamsTeamIdInvitesInviteIdRouteHandler)
  .openapi(postV1TeamsTeamIdMembersRoute, postV1TeamsTeamIdMembersRouteHandler)
  .openapi(postV1TeamsTeamIdMembersTeamsJoinRoute, postV1TeamsTeamIdMembersTeamsJoinRouteHandler)
  .openapi(deleteV1TeamsTeamIdMembersUidRoute, deleteV1TeamsTeamIdMembersUidRouteHandler)
  .openapi(patchV1TeamsTeamIdMembersUidRoute, patchV1TeamsTeamIdMembersUidRouteHandler)
  .openapi(postV1TeamsTeamIdRequestRoute, postV1TeamsTeamIdRequestRouteHandler)
  .openapi(getV1TeamsTeamIdRequestUserIdRoute, getV1TeamsTeamIdRequestUserIdRouteHandler)
  .openapi(deleteV1UserRoute, deleteV1UserRouteHandler)
  .openapi(getV1WebhooksRoute, getV1WebhooksRouteHandler)
  .openapi(postV1WebhooksRoute, postV1WebhooksRouteHandler)
  .openapi(deleteV1WebhooksIdRoute, deleteV1WebhooksIdRouteHandler)
  .openapi(getV1WebhooksIdRoute, getV1WebhooksIdRouteHandler)
  .openapi(postV10ProjectsIdOrNameEnvRoute, postV10ProjectsIdOrNameEnvRouteHandler)
  .openapi(
    getV11DeploymentsDeploymentIdBuildsRoute,
    getV11DeploymentsDeploymentIdBuildsRouteHandler,
  )
  .openapi(patchV12DeploymentsIdCancelRoute, patchV12DeploymentsIdCancelRouteHandler)
  .openapi(postV13DeploymentsRoute, postV13DeploymentsRouteHandler)
  .openapi(getV13DeploymentsIdOrUrlRoute, getV13DeploymentsIdOrUrlRouteHandler)
  .openapi(deleteV13DeploymentsIdRoute, deleteV13DeploymentsIdRouteHandler)
  .openapi(deleteV2AliasesAliasIdRoute, deleteV2AliasesAliasIdRouteHandler)
  .openapi(getV2DeploymentsIdOrUrlEventsRoute, getV2DeploymentsIdOrUrlEventsRouteHandler)
  .openapi(getV2DeploymentsIdAliasesRoute, getV2DeploymentsIdAliasesRouteHandler)
  .openapi(postV2DeploymentsIdAliasesRoute, postV2DeploymentsIdAliasesRouteHandler)
  .openapi(postV2DomainsDomainRecordsRoute, postV2DomainsDomainRecordsRouteHandler)
  .openapi(
    deleteV2DomainsDomainRecordsRecordIdRoute,
    deleteV2DomainsDomainRecordsRecordIdRouteHandler,
  )
  .openapi(postV2FilesRoute, postV2FilesRouteHandler)
  .openapi(getV2IntegrationsLogDrainsRoute, getV2IntegrationsLogDrainsRouteHandler)
  .openapi(postV2IntegrationsLogDrainsRoute, postV2IntegrationsLogDrainsRouteHandler)
  .openapi(deleteV2SecretsIdOrNameRoute, deleteV2SecretsIdOrNameRouteHandler)
  .openapi(patchV2SecretsNameRoute, patchV2SecretsNameRouteHandler)
  .openapi(postV2SecretsNameRoute, postV2SecretsNameRouteHandler)
  .openapi(getV2TeamsRoute, getV2TeamsRouteHandler)
  .openapi(getV2TeamsTeamIdRoute, getV2TeamsTeamIdRouteHandler)
  .openapi(patchV2TeamsTeamIdRoute, patchV2TeamsTeamIdRouteHandler)
  .openapi(getV2TeamsTeamIdMembersRoute, getV2TeamsTeamIdMembersRouteHandler)
  .openapi(getV2UserRoute, getV2UserRouteHandler)
  .openapi(getV3EventsRoute, getV3EventsRouteHandler)
  .openapi(getV3SecretsRoute, getV3SecretsRouteHandler)
  .openapi(getV3SecretsIdOrNameRoute, getV3SecretsIdOrNameRouteHandler)
  .openapi(postV3UserTokensRoute, postV3UserTokensRouteHandler)
  .openapi(deleteV3UserTokensTokenIdRoute, deleteV3UserTokensTokenIdRouteHandler)
  .openapi(getV4AliasesRoute, getV4AliasesRouteHandler)
  .openapi(getV4AliasesIdOrAliasRoute, getV4AliasesIdOrAliasRouteHandler)
  .openapi(postV4DomainsRoute, postV4DomainsRouteHandler)
  .openapi(postV4DomainsBuyRoute, postV4DomainsBuyRouteHandler)
  .openapi(getV4DomainsPriceRoute, getV4DomainsPriceRouteHandler)
  .openapi(getV4DomainsStatusRoute, getV4DomainsStatusRouteHandler)
  .openapi(getV4DomainsDomainRecordsRoute, getV4DomainsDomainRecordsRouteHandler)
  .openapi(getV5DomainsRoute, getV5DomainsRouteHandler)
  .openapi(getV5DomainsDomainRoute, getV5DomainsDomainRouteHandler)
  .openapi(getV5UserTokensRoute, getV5UserTokensRouteHandler)
  .openapi(getV5UserTokensTokenIdRoute, getV5UserTokensTokenIdRouteHandler)
  .openapi(getV6DeploymentsRoute, getV6DeploymentsRouteHandler)
  .openapi(getV6DeploymentsIdFilesRoute, getV6DeploymentsIdFilesRouteHandler)
  .openapi(getV6DeploymentsIdFilesFileIdRoute, getV6DeploymentsIdFilesFileIdRouteHandler)
  .openapi(deleteV6DomainsDomainRoute, deleteV6DomainsDomainRouteHandler)
  .openapi(getV6DomainsDomainConfigRoute, getV6DomainsDomainConfigRouteHandler)
  .openapi(postV7CertsRoute, postV7CertsRouteHandler)
  .openapi(putV7CertsRoute, putV7CertsRouteHandler)
  .openapi(deleteV7CertsIdRoute, deleteV7CertsIdRouteHandler)
  .openapi(getV7CertsIdRoute, getV7CertsIdRouteHandler)
  .openapi(postV8ArtifactsRoute, postV8ArtifactsRouteHandler)
  .openapi(postV8ArtifactsEventsRoute, postV8ArtifactsEventsRouteHandler)
  .openapi(getV8ArtifactsStatusRoute, getV8ArtifactsStatusRouteHandler)
  .openapi(getV8ArtifactsHashRoute, getV8ArtifactsHashRouteHandler)
  .openapi(headV8ArtifactsHashRoute, headV8ArtifactsHashRouteHandler)
  .openapi(putV8ArtifactsHashRoute, putV8ArtifactsHashRouteHandler)
  .openapi(getV9ProjectsRoute, getV9ProjectsRouteHandler)
  .openapi(postV9ProjectsRoute, postV9ProjectsRouteHandler)
  .openapi(deleteV9ProjectsIdOrNameRoute, deleteV9ProjectsIdOrNameRouteHandler)
  .openapi(getV9ProjectsIdOrNameRoute, getV9ProjectsIdOrNameRouteHandler)
  .openapi(patchV9ProjectsIdOrNameRoute, patchV9ProjectsIdOrNameRouteHandler)
  .openapi(getV9ProjectsIdOrNameDomainsRoute, getV9ProjectsIdOrNameDomainsRouteHandler)
  .openapi(postV9ProjectsIdOrNameDomainsRoute, postV9ProjectsIdOrNameDomainsRouteHandler)
  .openapi(
    deleteV9ProjectsIdOrNameDomainsDomainRoute,
    deleteV9ProjectsIdOrNameDomainsDomainRouteHandler,
  )
  .openapi(getV9ProjectsIdOrNameDomainsDomainRoute, getV9ProjectsIdOrNameDomainsDomainRouteHandler)
  .openapi(
    patchV9ProjectsIdOrNameDomainsDomainRoute,
    patchV9ProjectsIdOrNameDomainsDomainRouteHandler,
  )
  .openapi(
    postV9ProjectsIdOrNameDomainsDomainVerifyRoute,
    postV9ProjectsIdOrNameDomainsDomainVerifyRouteHandler,
  )
  .openapi(getV9ProjectsIdOrNameEnvRoute, getV9ProjectsIdOrNameEnvRouteHandler)
  .openapi(deleteV9ProjectsIdOrNameEnvIdRoute, deleteV9ProjectsIdOrNameEnvIdRouteHandler)
  .openapi(patchV9ProjectsIdOrNameEnvIdRoute, patchV9ProjectsIdOrNameEnvIdRouteHandler)

export default app
