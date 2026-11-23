import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsConfigurationIdRoute,
  deleteV1IntegrationsLogDrainsIdRoute,
  deleteV1LogDrainsIdRoute,
  deleteV1TeamsTeamIdInvitesInviteIdRoute,
  deleteV1TeamsTeamIdMembersUidRoute,
  deleteV1TeamsTeamIdRoute,
  deleteV1UserRoute,
  deleteV1WebhooksIdRoute,
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
  patchV1DeploymentsDeploymentIdChecksCheckIdRoute,
  patchV1DomainsRecordsRecordIdRoute,
  patchV1TeamsTeamIdMembersUidRoute,
  postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute,
  postV1DeploymentsDeploymentIdChecksRoute,
  postV1LogDrainsRoute,
  postV1TeamsRoute,
  postV1TeamsTeamIdMembersRoute,
  postV1TeamsTeamIdMembersTeamsJoinRoute,
  postV1TeamsTeamIdRequestRoute,
  postV1WebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1DeploymentsDeploymentIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeploymentsDeploymentIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DeploymentsDeploymentIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DeploymentsDeploymentIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DomainsRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsGitNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsLogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsSearchRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1LogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdMembersTeamsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TeamsTeamIdMembersUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsTeamIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsTeamIdRequestUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
