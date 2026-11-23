import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUnstableAdminClustersClusterIDRoute,
  deleteUnstableAdminTeamsTeamIDBanRoute,
  deleteUnstableAdminTemplatesAliasesAliasIDRoute,
  deleteUnstableAdminTemplatesDefaultsTemplateIDRoute,
  deleteUnstableManagementClustersClusterIDRoute,
  deleteUnstableManagementProjectsProjectIDClusterClusterIDRoute,
  deleteUnstableManagementProjectsProjectIDRoute,
  getUnstableAdminClustersClusterIDMetadataRoute,
  getUnstableAdminClustersClusterIDRoute,
  getUnstableAdminClustersClusterIDTeamsRoute,
  getUnstableAdminClustersRoute,
  getUnstableAdminSandboxesSandboxIDBuildsRoute,
  getUnstableAdminSandboxesSandboxIDOverviewRoute,
  getUnstableAdminTeamsTeamIDRoute,
  getUnstableAdminTemplatesAliasesRoute,
  getUnstableAdminTemplatesLookupRoute,
  getUnstableBuildsBuildIDRoute,
  getUnstableBuildsRoute,
  getUnstableBuildsStatusesRoute,
  getUnstableManagementClustersClusterIDDestroyReadinessRoute,
  getUnstableManagementClustersClusterIDProjectsRoute,
  getUnstableManagementTelemetryNamesRoute,
  getUnstableSandboxesSandboxIDRecordRoute,
  getUnstableTeamsTeamIDLimitsRoute,
  getUnstableTeamsTeamIDStatusRoute,
  getUnstableTemplatesSearchRoute,
  patchUnstableAdminClustersClusterIDRoute,
  patchUnstableAdminTemplatesDefaultsTemplateIDRoute,
  postUnstableAdminClustersRoute,
  postUnstableAdminSandboxesSandboxIDBuildsRestoreRoute,
  postUnstableAdminTeamsBansRoute,
  postUnstableAdminTeamsQueryRoute,
  postUnstableAdminTemplatesAliasesRoute,
  postUnstableAdminTemplatesDefaultsRoute,
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

export const unstableHandler = app
  .openapi(getUnstableTeamsTeamIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableTeamsTeamIDLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableSandboxesSandboxIDRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableTemplatesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableBuildsStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableBuildsBuildIDRoute, (c) => {
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
