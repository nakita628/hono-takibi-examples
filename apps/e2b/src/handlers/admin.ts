import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute,
  deleteClustersClusterIDRigsInstancesInstanceIDRoute,
  deleteUnstableAdminClustersClusterIDRoute,
  deleteUnstableAdminTeamsTeamIDBanRoute,
  deleteUnstableAdminTemplatesAliasesAliasIDRoute,
  deleteUnstableAdminTemplatesDefaultsTemplateIDRoute,
  deleteUnstableManagementClustersClusterIDRoute,
  deleteUnstableManagementProjectsProjectIDClusterClusterIDRoute,
  deleteUnstableManagementProjectsProjectIDRoute,
  getAdminSandboxesRunningCountsRoute,
  getAdminSandboxesSandboxIDRoute,
  getAdminTeamsTeamIDApiKeysRoute,
  getClustersClusterIDRigsRigIDErrorsRoute,
  getClustersClusterIDRigsRigIDInstancesRoute,
  getClustersClusterIDRigsRoute,
  getNodesNodeIDRoute,
  getNodesNodeIDSandboxesRoute,
  getNodesRoute,
  getUnstableAdminClustersClusterIDMetadataRoute,
  getUnstableAdminClustersClusterIDRoute,
  getUnstableAdminClustersClusterIDTeamsRoute,
  getUnstableAdminClustersRoute,
  getUnstableAdminSandboxesSandboxIDBuildsRoute,
  getUnstableAdminSandboxesSandboxIDOverviewRoute,
  getUnstableAdminTeamsTeamIDRoute,
  getUnstableAdminTemplatesAliasesRoute,
  getUnstableAdminTemplatesLookupRoute,
  getUnstableManagementClustersClusterIDDestroyReadinessRoute,
  getUnstableManagementClustersClusterIDProjectsRoute,
  getUnstableManagementTelemetryNamesRoute,
  patchUnstableAdminClustersClusterIDRoute,
  patchUnstableAdminTemplatesDefaultsTemplateIDRoute,
  postAdminTeamsTeamIDApiKeysRoute,
  postAdminTeamsTeamIDBuildsCancelRoute,
  postAdminTeamsTeamIDSandboxesKillRoute,
  postNodesNodeIDRoute,
  postUnstableAdminClustersRoute,
  postUnstableAdminSandboxesSandboxIDBuildsRestoreRoute,
  postUnstableAdminTeamsBansRoute,
  postUnstableAdminTeamsQueryRoute,
  postUnstableAdminTemplatesAliasesRoute,
  postUnstableAdminTemplatesDefaultsRoute,
  putClustersClusterIDRigsRigIDCapacityRoute,
  putUnstableAdminClustersClusterIDTokenRoute,
  putUnstableAdminTeamsTeamIDBanRoute,
  putUnstableAdminTeamsTeamIDSchedulingLabelsRoute,
  putUnstableManagementClustersClusterIDDeletionRoute,
  putUnstableManagementClustersClusterIDRoute,
  putUnstableManagementClustersClusterIDTelemetryRoute,
  putUnstableManagementProjectsProjectIDBanRoute,
  putUnstableManagementProjectsProjectIDBlockRoute,
  putUnstableManagementProjectsProjectIDClusterClusterIDRoute,
  putUnstableManagementProjectsProjectIDLimitsRoute,
  putUnstableManagementProjectsProjectIDMembersUserIDRoute,
  putUnstableManagementProjectsProjectIDRoute,
  putUnstableManagementProjectsProjectIDSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIDSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTeamIDSandboxesKillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSandboxesRunningCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSandboxesSandboxIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminSandboxesSandboxIDOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminSandboxesSandboxIDBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnstableAdminSandboxesSandboxIDBuildsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTeamIDBuildsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsTeamIDApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTeamIDApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableManagementTelemetryNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementClustersClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableManagementClustersClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementClustersClusterIDTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableManagementClustersClusterIDProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementClustersClusterIDDeletionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableManagementClustersClusterIDDestroyReadinessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDClusterClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableManagementProjectsProjectIDClusterClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableManagementProjectsProjectIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableManagementProjectsProjectIDBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnstableAdminTeamsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnstableAdminTeamsBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminTeamsTeamIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableAdminTeamsTeamIDSchedulingLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableAdminTeamsTeamIDBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableAdminTeamsTeamIDBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnstableAdminClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminClustersClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUnstableAdminClustersClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableAdminClustersClusterIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminClustersClusterIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminClustersClusterIDTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUnstableAdminClustersClusterIDTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminTemplatesAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnstableAdminTemplatesAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableAdminTemplatesAliasesAliasIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnstableAdminTemplatesDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUnstableAdminTemplatesDefaultsTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUnstableAdminTemplatesDefaultsTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableAdminTemplatesLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIDRigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIDRigsRigIDCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIDRigsInstancesInstanceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIDRigsRigIDInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIDRigsRigIDErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
