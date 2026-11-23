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
} from './routes'
import {
  getV1HealthRouteHandler,
  getV1OpenapiRouteHandler,
  postV1AttemptSaveStatsRouteHandler,
  postV1AttemptSaveSyncConfigRouteHandler,
  postV1AttemptSetWorkflowInAttemptRouteHandler,
  postV1ConnectionsCreateRouteHandler,
  postV1ConnectionsDeleteRouteHandler,
  postV1ConnectionsGetRouteHandler,
  postV1ConnectionsListAllRouteHandler,
  postV1ConnectionsListRouteHandler,
  postV1ConnectionsResetRouteHandler,
  postV1ConnectionsSearchRouteHandler,
  postV1ConnectionsSyncRouteHandler,
  postV1ConnectionsUpdateRouteHandler,
  postV1DestinationDefinitionsCreateCustomRouteHandler,
  postV1DestinationDefinitionsDeleteRouteHandler,
  postV1DestinationDefinitionsGetForWorkspaceRouteHandler,
  postV1DestinationDefinitionsGetRouteHandler,
  postV1DestinationDefinitionsGrantDefinitionRouteHandler,
  postV1DestinationDefinitionsListForWorkspaceRouteHandler,
  postV1DestinationDefinitionsListLatestRouteHandler,
  postV1DestinationDefinitionsListPrivateRouteHandler,
  postV1DestinationDefinitionsListRouteHandler,
  postV1DestinationDefinitionSpecificationsGetRouteHandler,
  postV1DestinationDefinitionsRevokeDefinitionRouteHandler,
  postV1DestinationDefinitionsUpdateRouteHandler,
  postV1DestinationOauthsCompleteOauthRouteHandler,
  postV1DestinationOauthsGetConsentUrlRouteHandler,
  postV1DestinationOauthsOauthParamsCreateRouteHandler,
  postV1DestinationsCheckConnectionForUpdateRouteHandler,
  postV1DestinationsCheckConnectionRouteHandler,
  postV1DestinationsCloneRouteHandler,
  postV1DestinationsCreateRouteHandler,
  postV1DestinationsDeleteRouteHandler,
  postV1DestinationsGetRouteHandler,
  postV1DestinationsListRouteHandler,
  postV1DestinationsSearchRouteHandler,
  postV1DestinationsUpdateRouteHandler,
  postV1JobsCancelRouteHandler,
  postV1JobsGetDebugInfoRouteHandler,
  postV1JobsGetLastReplicationJobRouteHandler,
  postV1JobsGetLightRouteHandler,
  postV1JobsGetNormalizationStatusRouteHandler,
  postV1JobsGetRouteHandler,
  postV1JobsListRouteHandler,
  postV1LogsGetRouteHandler,
  postV1NotificationsTryRouteHandler,
  postV1OperationsCheckRouteHandler,
  postV1OperationsCreateRouteHandler,
  postV1OperationsDeleteRouteHandler,
  postV1OperationsGetRouteHandler,
  postV1OperationsListRouteHandler,
  postV1OperationsUpdateRouteHandler,
  postV1SchedulerDestinationsCheckConnectionRouteHandler,
  postV1SchedulerSourcesCheckConnectionRouteHandler,
  postV1SchedulerSourcesDiscoverSchemaRouteHandler,
  postV1SourceDefinitionsCreateCustomRouteHandler,
  postV1SourceDefinitionsDeleteRouteHandler,
  postV1SourceDefinitionsGetForWorkspaceRouteHandler,
  postV1SourceDefinitionsGetRouteHandler,
  postV1SourceDefinitionsGrantDefinitionRouteHandler,
  postV1SourceDefinitionsListForWorkspaceRouteHandler,
  postV1SourceDefinitionsListLatestRouteHandler,
  postV1SourceDefinitionsListPrivateRouteHandler,
  postV1SourceDefinitionsListRouteHandler,
  postV1SourceDefinitionSpecificationsGetRouteHandler,
  postV1SourceDefinitionsRevokeDefinitionRouteHandler,
  postV1SourceDefinitionsUpdateRouteHandler,
  postV1SourceOauthsCompleteOauthRouteHandler,
  postV1SourceOauthsGetConsentUrlRouteHandler,
  postV1SourceOauthsOauthParamsCreateRouteHandler,
  postV1SourcesCheckConnectionForUpdateRouteHandler,
  postV1SourcesCheckConnectionRouteHandler,
  postV1SourcesCloneRouteHandler,
  postV1SourcesCreateRouteHandler,
  postV1SourcesDeleteRouteHandler,
  postV1SourcesDiscoverSchemaRouteHandler,
  postV1SourcesGetRouteHandler,
  postV1SourcesListRouteHandler,
  postV1SourcesMostRecentSourceActorCatalogRouteHandler,
  postV1SourcesSearchRouteHandler,
  postV1SourcesUpdateRouteHandler,
  postV1SourcesWriteDiscoverCatalogResultRouteHandler,
  postV1StateCreateOrUpdateRouteHandler,
  postV1StateGetRouteHandler,
  postV1WebBackendCheckUpdatesRouteHandler,
  postV1WebBackendConnectionsCreateRouteHandler,
  postV1WebBackendConnectionsGetRouteHandler,
  postV1WebBackendConnectionsListRouteHandler,
  postV1WebBackendConnectionsUpdateRouteHandler,
  postV1WebBackendGeographiesListRouteHandler,
  postV1WebBackendStateGetTypeRouteHandler,
  postV1WebBackendWorkspaceStateRouteHandler,
  postV1WorkspacesCreateRouteHandler,
  postV1WorkspacesDeleteRouteHandler,
  postV1WorkspacesGetByConnectionIdRouteHandler,
  postV1WorkspacesGetBySlugRouteHandler,
  postV1WorkspacesGetRouteHandler,
  postV1WorkspacesListRouteHandler,
  postV1WorkspacesTagFeedbackStatusAsDoneRouteHandler,
  postV1WorkspacesUpdateNameRouteHandler,
  postV1WorkspacesUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AttemptSaveStatsRoute, postV1AttemptSaveStatsRouteHandler)
  .openapi(postV1AttemptSaveSyncConfigRoute, postV1AttemptSaveSyncConfigRouteHandler)
  .openapi(postV1AttemptSetWorkflowInAttemptRoute, postV1AttemptSetWorkflowInAttemptRouteHandler)
  .openapi(postV1ConnectionsCreateRoute, postV1ConnectionsCreateRouteHandler)
  .openapi(postV1ConnectionsDeleteRoute, postV1ConnectionsDeleteRouteHandler)
  .openapi(postV1ConnectionsGetRoute, postV1ConnectionsGetRouteHandler)
  .openapi(postV1ConnectionsListRoute, postV1ConnectionsListRouteHandler)
  .openapi(postV1ConnectionsListAllRoute, postV1ConnectionsListAllRouteHandler)
  .openapi(postV1ConnectionsResetRoute, postV1ConnectionsResetRouteHandler)
  .openapi(postV1ConnectionsSearchRoute, postV1ConnectionsSearchRouteHandler)
  .openapi(postV1ConnectionsSyncRoute, postV1ConnectionsSyncRouteHandler)
  .openapi(postV1ConnectionsUpdateRoute, postV1ConnectionsUpdateRouteHandler)
  .openapi(
    postV1DestinationDefinitionSpecificationsGetRoute,
    postV1DestinationDefinitionSpecificationsGetRouteHandler,
  )
  .openapi(
    postV1DestinationDefinitionsCreateCustomRoute,
    postV1DestinationDefinitionsCreateCustomRouteHandler,
  )
  .openapi(postV1DestinationDefinitionsDeleteRoute, postV1DestinationDefinitionsDeleteRouteHandler)
  .openapi(postV1DestinationDefinitionsGetRoute, postV1DestinationDefinitionsGetRouteHandler)
  .openapi(
    postV1DestinationDefinitionsGetForWorkspaceRoute,
    postV1DestinationDefinitionsGetForWorkspaceRouteHandler,
  )
  .openapi(
    postV1DestinationDefinitionsGrantDefinitionRoute,
    postV1DestinationDefinitionsGrantDefinitionRouteHandler,
  )
  .openapi(postV1DestinationDefinitionsListRoute, postV1DestinationDefinitionsListRouteHandler)
  .openapi(
    postV1DestinationDefinitionsListForWorkspaceRoute,
    postV1DestinationDefinitionsListForWorkspaceRouteHandler,
  )
  .openapi(
    postV1DestinationDefinitionsListLatestRoute,
    postV1DestinationDefinitionsListLatestRouteHandler,
  )
  .openapi(
    postV1DestinationDefinitionsListPrivateRoute,
    postV1DestinationDefinitionsListPrivateRouteHandler,
  )
  .openapi(
    postV1DestinationDefinitionsRevokeDefinitionRoute,
    postV1DestinationDefinitionsRevokeDefinitionRouteHandler,
  )
  .openapi(postV1DestinationDefinitionsUpdateRoute, postV1DestinationDefinitionsUpdateRouteHandler)
  .openapi(
    postV1DestinationOauthsCompleteOauthRoute,
    postV1DestinationOauthsCompleteOauthRouteHandler,
  )
  .openapi(
    postV1DestinationOauthsGetConsentUrlRoute,
    postV1DestinationOauthsGetConsentUrlRouteHandler,
  )
  .openapi(
    postV1DestinationOauthsOauthParamsCreateRoute,
    postV1DestinationOauthsOauthParamsCreateRouteHandler,
  )
  .openapi(postV1DestinationsCheckConnectionRoute, postV1DestinationsCheckConnectionRouteHandler)
  .openapi(
    postV1DestinationsCheckConnectionForUpdateRoute,
    postV1DestinationsCheckConnectionForUpdateRouteHandler,
  )
  .openapi(postV1DestinationsCloneRoute, postV1DestinationsCloneRouteHandler)
  .openapi(postV1DestinationsCreateRoute, postV1DestinationsCreateRouteHandler)
  .openapi(postV1DestinationsDeleteRoute, postV1DestinationsDeleteRouteHandler)
  .openapi(postV1DestinationsGetRoute, postV1DestinationsGetRouteHandler)
  .openapi(postV1DestinationsListRoute, postV1DestinationsListRouteHandler)
  .openapi(postV1DestinationsSearchRoute, postV1DestinationsSearchRouteHandler)
  .openapi(postV1DestinationsUpdateRoute, postV1DestinationsUpdateRouteHandler)
  .openapi(getV1HealthRoute, getV1HealthRouteHandler)
  .openapi(postV1JobsCancelRoute, postV1JobsCancelRouteHandler)
  .openapi(postV1JobsGetRoute, postV1JobsGetRouteHandler)
  .openapi(postV1JobsGetDebugInfoRoute, postV1JobsGetDebugInfoRouteHandler)
  .openapi(postV1JobsGetLastReplicationJobRoute, postV1JobsGetLastReplicationJobRouteHandler)
  .openapi(postV1JobsGetLightRoute, postV1JobsGetLightRouteHandler)
  .openapi(postV1JobsGetNormalizationStatusRoute, postV1JobsGetNormalizationStatusRouteHandler)
  .openapi(postV1JobsListRoute, postV1JobsListRouteHandler)
  .openapi(postV1LogsGetRoute, postV1LogsGetRouteHandler)
  .openapi(postV1NotificationsTryRoute, postV1NotificationsTryRouteHandler)
  .openapi(getV1OpenapiRoute, getV1OpenapiRouteHandler)
  .openapi(postV1OperationsCheckRoute, postV1OperationsCheckRouteHandler)
  .openapi(postV1OperationsCreateRoute, postV1OperationsCreateRouteHandler)
  .openapi(postV1OperationsDeleteRoute, postV1OperationsDeleteRouteHandler)
  .openapi(postV1OperationsGetRoute, postV1OperationsGetRouteHandler)
  .openapi(postV1OperationsListRoute, postV1OperationsListRouteHandler)
  .openapi(postV1OperationsUpdateRoute, postV1OperationsUpdateRouteHandler)
  .openapi(
    postV1SchedulerDestinationsCheckConnectionRoute,
    postV1SchedulerDestinationsCheckConnectionRouteHandler,
  )
  .openapi(
    postV1SchedulerSourcesCheckConnectionRoute,
    postV1SchedulerSourcesCheckConnectionRouteHandler,
  )
  .openapi(
    postV1SchedulerSourcesDiscoverSchemaRoute,
    postV1SchedulerSourcesDiscoverSchemaRouteHandler,
  )
  .openapi(
    postV1SourceDefinitionSpecificationsGetRoute,
    postV1SourceDefinitionSpecificationsGetRouteHandler,
  )
  .openapi(
    postV1SourceDefinitionsCreateCustomRoute,
    postV1SourceDefinitionsCreateCustomRouteHandler,
  )
  .openapi(postV1SourceDefinitionsDeleteRoute, postV1SourceDefinitionsDeleteRouteHandler)
  .openapi(postV1SourceDefinitionsGetRoute, postV1SourceDefinitionsGetRouteHandler)
  .openapi(
    postV1SourceDefinitionsGetForWorkspaceRoute,
    postV1SourceDefinitionsGetForWorkspaceRouteHandler,
  )
  .openapi(
    postV1SourceDefinitionsGrantDefinitionRoute,
    postV1SourceDefinitionsGrantDefinitionRouteHandler,
  )
  .openapi(postV1SourceDefinitionsListRoute, postV1SourceDefinitionsListRouteHandler)
  .openapi(
    postV1SourceDefinitionsListForWorkspaceRoute,
    postV1SourceDefinitionsListForWorkspaceRouteHandler,
  )
  .openapi(postV1SourceDefinitionsListLatestRoute, postV1SourceDefinitionsListLatestRouteHandler)
  .openapi(postV1SourceDefinitionsListPrivateRoute, postV1SourceDefinitionsListPrivateRouteHandler)
  .openapi(
    postV1SourceDefinitionsRevokeDefinitionRoute,
    postV1SourceDefinitionsRevokeDefinitionRouteHandler,
  )
  .openapi(postV1SourceDefinitionsUpdateRoute, postV1SourceDefinitionsUpdateRouteHandler)
  .openapi(postV1SourceOauthsCompleteOauthRoute, postV1SourceOauthsCompleteOauthRouteHandler)
  .openapi(postV1SourceOauthsGetConsentUrlRoute, postV1SourceOauthsGetConsentUrlRouteHandler)
  .openapi(
    postV1SourceOauthsOauthParamsCreateRoute,
    postV1SourceOauthsOauthParamsCreateRouteHandler,
  )
  .openapi(postV1SourcesCheckConnectionRoute, postV1SourcesCheckConnectionRouteHandler)
  .openapi(
    postV1SourcesCheckConnectionForUpdateRoute,
    postV1SourcesCheckConnectionForUpdateRouteHandler,
  )
  .openapi(postV1SourcesCloneRoute, postV1SourcesCloneRouteHandler)
  .openapi(postV1SourcesCreateRoute, postV1SourcesCreateRouteHandler)
  .openapi(postV1SourcesDeleteRoute, postV1SourcesDeleteRouteHandler)
  .openapi(postV1SourcesDiscoverSchemaRoute, postV1SourcesDiscoverSchemaRouteHandler)
  .openapi(postV1SourcesGetRoute, postV1SourcesGetRouteHandler)
  .openapi(postV1SourcesListRoute, postV1SourcesListRouteHandler)
  .openapi(
    postV1SourcesMostRecentSourceActorCatalogRoute,
    postV1SourcesMostRecentSourceActorCatalogRouteHandler,
  )
  .openapi(postV1SourcesSearchRoute, postV1SourcesSearchRouteHandler)
  .openapi(postV1SourcesUpdateRoute, postV1SourcesUpdateRouteHandler)
  .openapi(
    postV1SourcesWriteDiscoverCatalogResultRoute,
    postV1SourcesWriteDiscoverCatalogResultRouteHandler,
  )
  .openapi(postV1StateCreateOrUpdateRoute, postV1StateCreateOrUpdateRouteHandler)
  .openapi(postV1StateGetRoute, postV1StateGetRouteHandler)
  .openapi(postV1WebBackendCheckUpdatesRoute, postV1WebBackendCheckUpdatesRouteHandler)
  .openapi(postV1WebBackendConnectionsCreateRoute, postV1WebBackendConnectionsCreateRouteHandler)
  .openapi(postV1WebBackendConnectionsGetRoute, postV1WebBackendConnectionsGetRouteHandler)
  .openapi(postV1WebBackendConnectionsListRoute, postV1WebBackendConnectionsListRouteHandler)
  .openapi(postV1WebBackendConnectionsUpdateRoute, postV1WebBackendConnectionsUpdateRouteHandler)
  .openapi(postV1WebBackendGeographiesListRoute, postV1WebBackendGeographiesListRouteHandler)
  .openapi(postV1WebBackendStateGetTypeRoute, postV1WebBackendStateGetTypeRouteHandler)
  .openapi(postV1WebBackendWorkspaceStateRoute, postV1WebBackendWorkspaceStateRouteHandler)
  .openapi(postV1WorkspacesCreateRoute, postV1WorkspacesCreateRouteHandler)
  .openapi(postV1WorkspacesDeleteRoute, postV1WorkspacesDeleteRouteHandler)
  .openapi(postV1WorkspacesGetRoute, postV1WorkspacesGetRouteHandler)
  .openapi(postV1WorkspacesGetByConnectionIdRoute, postV1WorkspacesGetByConnectionIdRouteHandler)
  .openapi(postV1WorkspacesGetBySlugRoute, postV1WorkspacesGetBySlugRouteHandler)
  .openapi(postV1WorkspacesListRoute, postV1WorkspacesListRouteHandler)
  .openapi(
    postV1WorkspacesTagFeedbackStatusAsDoneRoute,
    postV1WorkspacesTagFeedbackStatusAsDoneRouteHandler,
  )
  .openapi(postV1WorkspacesUpdateRoute, postV1WorkspacesUpdateRouteHandler)
  .openapi(postV1WorkspacesUpdateNameRoute, postV1WorkspacesUpdateNameRouteHandler)

export default app
