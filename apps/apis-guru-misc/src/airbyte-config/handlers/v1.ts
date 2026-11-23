import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1HealthRoute,
  getV1OpenapiRoute,
  postV1AttemptSaveStatsRoute,
  postV1AttemptSaveSyncConfigRoute,
  postV1AttemptSetWorkflowInAttemptRoute,
  postV1ConnectionsCreateRoute,
  postV1ConnectionsDeleteRoute,
  postV1ConnectionsGetRoute,
  postV1ConnectionsListAllRoute,
  postV1ConnectionsListRoute,
  postV1ConnectionsResetRoute,
  postV1ConnectionsSearchRoute,
  postV1ConnectionsSyncRoute,
  postV1ConnectionsUpdateRoute,
  postV1DestinationDefinitionsCreateCustomRoute,
  postV1DestinationDefinitionsDeleteRoute,
  postV1DestinationDefinitionsGetForWorkspaceRoute,
  postV1DestinationDefinitionsGetRoute,
  postV1DestinationDefinitionsGrantDefinitionRoute,
  postV1DestinationDefinitionsListForWorkspaceRoute,
  postV1DestinationDefinitionsListLatestRoute,
  postV1DestinationDefinitionsListPrivateRoute,
  postV1DestinationDefinitionsListRoute,
  postV1DestinationDefinitionSpecificationsGetRoute,
  postV1DestinationDefinitionsRevokeDefinitionRoute,
  postV1DestinationDefinitionsUpdateRoute,
  postV1DestinationOauthsCompleteOauthRoute,
  postV1DestinationOauthsGetConsentUrlRoute,
  postV1DestinationOauthsOauthParamsCreateRoute,
  postV1DestinationsCheckConnectionForUpdateRoute,
  postV1DestinationsCheckConnectionRoute,
  postV1DestinationsCloneRoute,
  postV1DestinationsCreateRoute,
  postV1DestinationsDeleteRoute,
  postV1DestinationsGetRoute,
  postV1DestinationsListRoute,
  postV1DestinationsSearchRoute,
  postV1DestinationsUpdateRoute,
  postV1JobsCancelRoute,
  postV1JobsGetDebugInfoRoute,
  postV1JobsGetLastReplicationJobRoute,
  postV1JobsGetLightRoute,
  postV1JobsGetNormalizationStatusRoute,
  postV1JobsGetRoute,
  postV1JobsListRoute,
  postV1LogsGetRoute,
  postV1NotificationsTryRoute,
  postV1OperationsCheckRoute,
  postV1OperationsCreateRoute,
  postV1OperationsDeleteRoute,
  postV1OperationsGetRoute,
  postV1OperationsListRoute,
  postV1OperationsUpdateRoute,
  postV1SchedulerDestinationsCheckConnectionRoute,
  postV1SchedulerSourcesCheckConnectionRoute,
  postV1SchedulerSourcesDiscoverSchemaRoute,
  postV1SourceDefinitionsCreateCustomRoute,
  postV1SourceDefinitionsDeleteRoute,
  postV1SourceDefinitionsGetForWorkspaceRoute,
  postV1SourceDefinitionsGetRoute,
  postV1SourceDefinitionsGrantDefinitionRoute,
  postV1SourceDefinitionsListForWorkspaceRoute,
  postV1SourceDefinitionsListLatestRoute,
  postV1SourceDefinitionsListPrivateRoute,
  postV1SourceDefinitionsListRoute,
  postV1SourceDefinitionSpecificationsGetRoute,
  postV1SourceDefinitionsRevokeDefinitionRoute,
  postV1SourceDefinitionsUpdateRoute,
  postV1SourceOauthsCompleteOauthRoute,
  postV1SourceOauthsGetConsentUrlRoute,
  postV1SourceOauthsOauthParamsCreateRoute,
  postV1SourcesCheckConnectionForUpdateRoute,
  postV1SourcesCheckConnectionRoute,
  postV1SourcesCloneRoute,
  postV1SourcesCreateRoute,
  postV1SourcesDeleteRoute,
  postV1SourcesDiscoverSchemaRoute,
  postV1SourcesGetRoute,
  postV1SourcesListRoute,
  postV1SourcesMostRecentSourceActorCatalogRoute,
  postV1SourcesSearchRoute,
  postV1SourcesUpdateRoute,
  postV1SourcesWriteDiscoverCatalogResultRoute,
  postV1StateCreateOrUpdateRoute,
  postV1StateGetRoute,
  postV1WebBackendCheckUpdatesRoute,
  postV1WebBackendConnectionsCreateRoute,
  postV1WebBackendConnectionsGetRoute,
  postV1WebBackendConnectionsListRoute,
  postV1WebBackendConnectionsUpdateRoute,
  postV1WebBackendGeographiesListRoute,
  postV1WebBackendStateGetTypeRoute,
  postV1WebBackendWorkspaceStateRoute,
  postV1WorkspacesCreateRoute,
  postV1WorkspacesDeleteRoute,
  postV1WorkspacesGetByConnectionIdRoute,
  postV1WorkspacesGetBySlugRoute,
  postV1WorkspacesGetRoute,
  postV1WorkspacesListRoute,
  postV1WorkspacesTagFeedbackStatusAsDoneRoute,
  postV1WorkspacesUpdateNameRoute,
  postV1WorkspacesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AttemptSaveStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSaveSyncConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttemptSetWorkflowInAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionSpecificationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsCreateCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGetForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsGrantDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsListPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsRevokeDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetDebugInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLastReplicationJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetNormalizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotificationsTryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerDestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerSourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerSourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionSpecificationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsCreateCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGetForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsGrantDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListForWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsListPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsRevokeDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceDefinitionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourceOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesMostRecentSourceActorCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesWriteDiscoverCatalogResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StateCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StateGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendCheckUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendGeographiesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendStateGetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebBackendWorkspaceStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetByConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetBySlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesTagFeedbackStatusAsDoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
