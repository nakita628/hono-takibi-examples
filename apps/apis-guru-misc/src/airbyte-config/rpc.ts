import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AttemptSaveStats(
  args: InferRequestType<typeof client.v1.attempt.save_stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.save_stats.$post(args, options))
}

export async function postV1AttemptSaveSyncConfig(
  args: InferRequestType<typeof client.v1.attempt.save_sync_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.save_sync_config.$post(args, options))
}

export async function postV1AttemptSetWorkflowInAttempt(
  args: InferRequestType<typeof client.v1.attempt.set_workflow_in_attempt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.set_workflow_in_attempt.$post(args, options))
}

export async function postV1ConnectionsCreate(
  args: InferRequestType<typeof client.v1.connections.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.create.$post(args, options))
}

export async function postV1ConnectionsDelete(
  args: InferRequestType<typeof client.v1.connections.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.delete.$post(args, options))
}

export async function postV1ConnectionsGet(
  args: InferRequestType<typeof client.v1.connections.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.get.$post(args, options))
}

export async function postV1ConnectionsList(
  args: InferRequestType<typeof client.v1.connections.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.list.$post(args, options))
}

export async function postV1ConnectionsListAll(
  args: InferRequestType<typeof client.v1.connections.list_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.list_all.$post(args, options))
}

export async function postV1ConnectionsReset(
  args: InferRequestType<typeof client.v1.connections.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.reset.$post(args, options))
}

export async function postV1ConnectionsSearch(
  args: InferRequestType<typeof client.v1.connections.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.search.$post(args, options))
}

export async function postV1ConnectionsSync(
  args: InferRequestType<typeof client.v1.connections.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.sync.$post(args, options))
}

export async function postV1ConnectionsUpdate(
  args: InferRequestType<typeof client.v1.connections.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.update.$post(args, options))
}

export async function postV1DestinationDefinitionSpecificationsGet(
  args: InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definition_specifications.get.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsCreateCustom(
  args: InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.create_custom.$post(args, options))
}

export async function postV1DestinationDefinitionsDelete(
  args: InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.delete.$post(args, options))
}

export async function postV1DestinationDefinitionsGet(
  args: InferRequestType<typeof client.v1.destination_definitions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.get.$post(args, options))
}

export async function postV1DestinationDefinitionsGetForWorkspace(
  args: InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.get_for_workspace.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsGrantDefinition(
  args: InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.grant_definition.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.destination_definitions.list.$post(undefined, options))
}

export async function postV1DestinationDefinitionsListForWorkspace(
  args: InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.list_for_workspace.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsListLatest(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.destination_definitions.list_latest.$post(undefined, options),
  )
}

export async function postV1DestinationDefinitionsListPrivate(
  args: InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.list_private.$post(args, options))
}

export async function postV1DestinationDefinitionsRevokeDefinition(
  args: InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.revoke_definition.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsUpdate(
  args: InferRequestType<typeof client.v1.destination_definitions.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.update.$post(args, options))
}

export async function postV1DestinationOauthsCompleteOauth(
  args: InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_oauths.complete_oauth.$post(args, options))
}

export async function postV1DestinationOauthsGetConsentUrl(
  args: InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_oauths.get_consent_url.$post(args, options))
}

export async function postV1DestinationOauthsOauthParamsCreate(
  args: InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_oauths.oauth_params.create.$post(args, options))
}

export async function postV1DestinationsCheckConnection(
  args: InferRequestType<typeof client.v1.destinations.check_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.check_connection.$post(args, options))
}

export async function postV1DestinationsCheckConnectionForUpdate(
  args: InferRequestType<typeof client.v1.destinations.check_connection_for_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations.check_connection_for_update.$post(args, options),
  )
}

export async function postV1DestinationsClone(
  args: InferRequestType<typeof client.v1.destinations.clone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.clone.$post(args, options))
}

export async function postV1DestinationsCreate(
  args: InferRequestType<typeof client.v1.destinations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.create.$post(args, options))
}

export async function postV1DestinationsDelete(
  args: InferRequestType<typeof client.v1.destinations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.delete.$post(args, options))
}

export async function postV1DestinationsGet(
  args: InferRequestType<typeof client.v1.destinations.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.get.$post(args, options))
}

export async function postV1DestinationsList(
  args: InferRequestType<typeof client.v1.destinations.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.list.$post(args, options))
}

export async function postV1DestinationsSearch(
  args: InferRequestType<typeof client.v1.destinations.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.search.$post(args, options))
}

export async function postV1DestinationsUpdate(
  args: InferRequestType<typeof client.v1.destinations.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.update.$post(args, options))
}

export async function getV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.health.$get(undefined, options))
}

export async function postV1JobsCancel(
  args: InferRequestType<typeof client.v1.jobs.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.cancel.$post(args, options))
}

export async function postV1JobsGet(
  args: InferRequestType<typeof client.v1.jobs.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get.$post(args, options))
}

export async function postV1JobsGetDebugInfo(
  args: InferRequestType<typeof client.v1.jobs.get_debug_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_debug_info.$post(args, options))
}

export async function postV1JobsGetLastReplicationJob(
  args: InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_last_replication_job.$post(args, options))
}

export async function postV1JobsGetLight(
  args: InferRequestType<typeof client.v1.jobs.get_light.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_light.$post(args, options))
}

export async function postV1JobsGetNormalizationStatus(
  args: InferRequestType<typeof client.v1.jobs.get_normalization_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_normalization_status.$post(args, options))
}

export async function postV1JobsList(
  args: InferRequestType<typeof client.v1.jobs.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.list.$post(args, options))
}

export async function postV1LogsGet(
  args: InferRequestType<typeof client.v1.logs.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.logs.get.$post(args, options))
}

export async function postV1NotificationsTry(
  args: InferRequestType<typeof client.v1.notifications.try.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.try.$post(args, options))
}

export async function getV1Openapi(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.openapi.$get(undefined, options))
}

export async function postV1OperationsCheck(
  args: InferRequestType<typeof client.v1.operations.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.check.$post(args, options))
}

export async function postV1OperationsCreate(
  args: InferRequestType<typeof client.v1.operations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.create.$post(args, options))
}

export async function postV1OperationsDelete(
  args: InferRequestType<typeof client.v1.operations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.delete.$post(args, options))
}

export async function postV1OperationsGet(
  args: InferRequestType<typeof client.v1.operations.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.get.$post(args, options))
}

export async function postV1OperationsList(
  args: InferRequestType<typeof client.v1.operations.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.list.$post(args, options))
}

export async function postV1OperationsUpdate(
  args: InferRequestType<typeof client.v1.operations.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.update.$post(args, options))
}

export async function postV1SchedulerDestinationsCheckConnection(
  args: InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scheduler.destinations.check_connection.$post(args, options))
}

export async function postV1SchedulerSourcesCheckConnection(
  args: InferRequestType<typeof client.v1.scheduler.sources.check_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scheduler.sources.check_connection.$post(args, options))
}

export async function postV1SchedulerSourcesDiscoverSchema(
  args: InferRequestType<typeof client.v1.scheduler.sources.discover_schema.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scheduler.sources.discover_schema.$post(args, options))
}

export async function postV1SourceDefinitionSpecificationsGet(
  args: InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definition_specifications.get.$post(args, options))
}

export async function postV1SourceDefinitionsCreateCustom(
  args: InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.create_custom.$post(args, options))
}

export async function postV1SourceDefinitionsDelete(
  args: InferRequestType<typeof client.v1.source_definitions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.delete.$post(args, options))
}

export async function postV1SourceDefinitionsGet(
  args: InferRequestType<typeof client.v1.source_definitions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.get.$post(args, options))
}

export async function postV1SourceDefinitionsGetForWorkspace(
  args: InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.get_for_workspace.$post(args, options))
}

export async function postV1SourceDefinitionsGrantDefinition(
  args: InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.grant_definition.$post(args, options))
}

export async function postV1SourceDefinitionsList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.source_definitions.list.$post(undefined, options))
}

export async function postV1SourceDefinitionsListForWorkspace(
  args: InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.list_for_workspace.$post(args, options))
}

export async function postV1SourceDefinitionsListLatest(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.source_definitions.list_latest.$post(undefined, options))
}

export async function postV1SourceDefinitionsListPrivate(
  args: InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.list_private.$post(args, options))
}

export async function postV1SourceDefinitionsRevokeDefinition(
  args: InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.revoke_definition.$post(args, options))
}

export async function postV1SourceDefinitionsUpdate(
  args: InferRequestType<typeof client.v1.source_definitions.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.update.$post(args, options))
}

export async function postV1SourceOauthsCompleteOauth(
  args: InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.complete_oauth.$post(args, options))
}

export async function postV1SourceOauthsGetConsentUrl(
  args: InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.get_consent_url.$post(args, options))
}

export async function postV1SourceOauthsOauthParamsCreate(
  args: InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.oauth_params.create.$post(args, options))
}

export async function postV1SourcesCheckConnection(
  args: InferRequestType<typeof client.v1.sources.check_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.check_connection.$post(args, options))
}

export async function postV1SourcesCheckConnectionForUpdate(
  args: InferRequestType<typeof client.v1.sources.check_connection_for_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.check_connection_for_update.$post(args, options))
}

export async function postV1SourcesClone(
  args: InferRequestType<typeof client.v1.sources.clone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.clone.$post(args, options))
}

export async function postV1SourcesCreate(
  args: InferRequestType<typeof client.v1.sources.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.create.$post(args, options))
}

export async function postV1SourcesDelete(
  args: InferRequestType<typeof client.v1.sources.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.delete.$post(args, options))
}

export async function postV1SourcesDiscoverSchema(
  args: InferRequestType<typeof client.v1.sources.discover_schema.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.discover_schema.$post(args, options))
}

export async function postV1SourcesGet(
  args: InferRequestType<typeof client.v1.sources.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.get.$post(args, options))
}

export async function postV1SourcesList(
  args: InferRequestType<typeof client.v1.sources.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.list.$post(args, options))
}

export async function postV1SourcesMostRecentSourceActorCatalog(
  args: InferRequestType<typeof client.v1.sources.most_recent_source_actor_catalog.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sources.most_recent_source_actor_catalog.$post(args, options),
  )
}

export async function postV1SourcesSearch(
  args: InferRequestType<typeof client.v1.sources.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.search.$post(args, options))
}

export async function postV1SourcesUpdate(
  args: InferRequestType<typeof client.v1.sources.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.update.$post(args, options))
}

export async function postV1SourcesWriteDiscoverCatalogResult(
  args: InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.write_discover_catalog_result.$post(args, options))
}

export async function postV1StateCreateOrUpdate(
  args: InferRequestType<typeof client.v1.state.create_or_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.state.create_or_update.$post(args, options))
}

export async function postV1StateGet(
  args: InferRequestType<typeof client.v1.state.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.state.get.$post(args, options))
}

export async function postV1WebBackendCheckUpdates(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.web_backend.check_updates.$post(undefined, options))
}

export async function postV1WebBackendConnectionsCreate(
  args: InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.create.$post(args, options))
}

export async function postV1WebBackendConnectionsGet(
  args: InferRequestType<typeof client.v1.web_backend.connections.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.get.$post(args, options))
}

export async function postV1WebBackendConnectionsList(
  args: InferRequestType<typeof client.v1.web_backend.connections.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.list.$post(args, options))
}

export async function postV1WebBackendConnectionsUpdate(
  args: InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.update.$post(args, options))
}

export async function postV1WebBackendGeographiesList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.web_backend.geographies.list.$post(undefined, options))
}

export async function postV1WebBackendStateGetType(
  args: InferRequestType<typeof client.v1.web_backend.state.get_type.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.state.get_type.$post(args, options))
}

export async function postV1WebBackendWorkspaceState(
  args: InferRequestType<typeof client.v1.web_backend.workspace.state.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.workspace.state.$post(args, options))
}

export async function postV1WorkspacesCreate(
  args: InferRequestType<typeof client.v1.workspaces.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.create.$post(args, options))
}

export async function postV1WorkspacesDelete(
  args: InferRequestType<typeof client.v1.workspaces.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.delete.$post(args, options))
}

export async function postV1WorkspacesGet(
  args: InferRequestType<typeof client.v1.workspaces.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get.$post(args, options))
}

export async function postV1WorkspacesGetByConnectionId(
  args: InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_by_connection_id.$post(args, options))
}

export async function postV1WorkspacesGetBySlug(
  args: InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_by_slug.$post(args, options))
}

export async function postV1WorkspacesList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.workspaces.list.$post(undefined, options))
}

export async function postV1WorkspacesTagFeedbackStatusAsDone(
  args: InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.tag_feedback_status_as_done.$post(args, options))
}

export async function postV1WorkspacesUpdate(
  args: InferRequestType<typeof client.v1.workspaces.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.update.$post(args, options))
}

export async function postV1WorkspacesUpdateName(
  args: InferRequestType<typeof client.v1.workspaces.update_name.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.update_name.$post(args, options))
}
