import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1SourcesSourceIdSearch(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId'].search.$post(args, options))
}

export async function postV1DestinationsDestinationIdSearch(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations[':destinationId'].search.$post(args, options))
}

export async function getV1SourcesSourceIdSearchStatus(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['search-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId']['search-status'].$get(args, options))
}

export async function getV1DestinationsDestinationIdSearchStatus(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['search-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations[':destinationId']['search-status'].$get(args, options),
  )
}

export async function getV1SourcesSourceIdEnablement(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId'].enablement.$get(args, options))
}

export async function putV1SourcesSourceIdEnablement(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId'].enablement.$put(args, options))
}

export async function postV1SourcesSourceIdEnablement(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId'].enablement.$post(args, options))
}

export async function deleteV1SourcesSourceIdEnablement(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['enablement']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId'].enablement.$delete(args, options))
}

export async function getV1DestinationsDestinationIdEnablement(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations[':destinationId'].enablement.$get(args, options),
  )
}

export async function putV1DestinationsDestinationIdEnablement(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations[':destinationId'].enablement.$put(args, options),
  )
}

export async function postV1DestinationsDestinationIdEnablement(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['enablement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations[':destinationId'].enablement.$post(args, options),
  )
}

export async function deleteV1DestinationsDestinationIdEnablement(
  args: InferRequestType<
    (typeof client.v1.destinations)[':destinationId']['enablement']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations[':destinationId'].enablement.$delete(args, options),
  )
}

export async function getV1ConnectionsConnectionIdEnablement(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections[':connectionId'].enablement.$get(args, options))
}

export async function putV1ConnectionsConnectionIdEnablement(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections[':connectionId'].enablement.$put(args, options))
}

export async function postV1ConnectionsConnectionIdEnablement(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections[':connectionId'].enablement.$post(args, options))
}

export async function deleteV1ConnectionsConnectionIdEnablement(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['enablement']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connections[':connectionId'].enablement.$delete(args, options),
  )
}

export async function postV1ConnectionsResolveEnablementForSync(
  args: InferRequestType<typeof client.v1.connections.resolve_enablement_for_sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.resolve_enablement_for_sync.$post(args, options))
}

export async function postV1ConnectionsConnectionIdBackfill(
  args: InferRequestType<(typeof client.v1.connections)[':connectionId']['backfill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections[':connectionId'].backfill.$post(args, options))
}

export async function postV1WorkspacesCreate(
  args: InferRequestType<typeof client.v1.workspaces.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.create.$post(args, options))
}

export async function postV1WorkspacesCreateIfNotExist(
  args: InferRequestType<typeof client.v1.workspaces.create_if_not_exist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.create_if_not_exist.$post(args, options))
}

export async function postV1WorkspacesDelete(
  args: InferRequestType<typeof client.v1.workspaces.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.delete.$post(args, options))
}

export async function postV1WorkspacesListPaginated(
  args: InferRequestType<typeof client.v1.workspaces.list_paginated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.list_paginated.$post(args, options))
}

export async function postV1WorkspacesListByOrganizationId(
  args: InferRequestType<typeof client.v1.workspaces.list_by_organization_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.list_by_organization_id.$post(args, options))
}

export async function postV1WorkspacesListByUserId(
  args: InferRequestType<typeof client.v1.workspaces.list_by_user_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.list_by_user_id.$post(args, options))
}

export async function postV1WorkspacesGetAvailableDbtJobs(
  args: InferRequestType<typeof client.v1.workspaces.get_available_dbt_jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_available_dbt_jobs.$post(args, options))
}

export async function postV1WorkspacesGet(
  args: InferRequestType<typeof client.v1.workspaces.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get.$post(args, options))
}

export async function postV1WorkspacesGetBySlug(
  args: InferRequestType<typeof client.v1.workspaces.get_by_slug.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_by_slug.$post(args, options))
}

export async function postV1WorkspacesGetByConnectionId(
  args: InferRequestType<typeof client.v1.workspaces.get_by_connection_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_by_connection_id.$post(args, options))
}

export async function postV1WorkspacesGetByConnectionIdWithTombstone(
  args: InferRequestType<typeof client.v1.workspaces.get_by_connection_id_with_tombstone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workspaces.get_by_connection_id_with_tombstone.$post(args, options),
  )
}

export async function postV1WorkspacesGetOrganizationInfo(
  args: InferRequestType<typeof client.v1.workspaces.get_organization_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_organization_info.$post(args, options))
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

export async function postV1WorkspacesUpdateOrganization(
  args: InferRequestType<typeof client.v1.workspaces.update_organization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.update_organization.$post(args, options))
}

export async function postV1WorkspacesGetUsage(
  args: InferRequestType<typeof client.v1.workspaces.get_usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_usage.$post(args, options))
}

export async function postV1WorkspacesGetDataWorkerAvailability(
  args: InferRequestType<typeof client.v1.workspaces.get_data_worker_availability.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.get_data_worker_availability.$post(args, options))
}

export async function postV1WorkspacesTagFeedbackStatusAsDone(
  args: InferRequestType<typeof client.v1.workspaces.tag_feedback_status_as_done.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces.tag_feedback_status_as_done.$post(args, options))
}

export async function postV1NotificationsTry(
  args: InferRequestType<typeof client.v1.notifications.try.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.try.$post(args, options))
}

export async function postV1NotificationsTryWebhook(
  args: InferRequestType<typeof client.v1.notifications.try_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.notifications.try_webhook.$post(args, options))
}

export async function postV1SourceDefinitionsUpdate(
  args: InferRequestType<typeof client.v1.source_definitions.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.update.$post(args, options))
}

export async function postV1SourceDefinitionsList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.source_definitions.list.$post(undefined, options))
}

export async function postV1SourceDefinitionsListLatest(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.source_definitions.list_latest.$post(undefined, options))
}

export async function postV1SourceDefinitionsGet(
  args: InferRequestType<typeof client.v1.source_definitions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.get.$post(args, options))
}

export async function postV1SourceDefinitionsDelete(
  args: InferRequestType<typeof client.v1.source_definitions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.delete.$post(args, options))
}

export async function postV1SourceDefinitionsListPrivate(
  args: InferRequestType<typeof client.v1.source_definitions.list_private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.list_private.$post(args, options))
}

export async function postV1SourceDefinitionsListForWorkspace(
  args: InferRequestType<typeof client.v1.source_definitions.list_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.list_for_workspace.$post(args, options))
}

export async function postV1SourceDefinitionsListEnterpriseSourceStubs(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.source_definitions.list_enterprise_source_stubs.$post(undefined, options),
  )
}

export async function postV1SourceDefinitionsListEnterpriseStubsForWorkspace(
  args: InferRequestType<
    typeof client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.source_definitions.list_enterprise_stubs_for_workspace.$post(args, options),
  )
}

export async function postV1SourceDefinitionsCreateCustom(
  args: InferRequestType<typeof client.v1.source_definitions.create_custom.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.create_custom.$post(args, options))
}

export async function postV1SourceDefinitionsGetForWorkspace(
  args: InferRequestType<typeof client.v1.source_definitions.get_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.get_for_workspace.$post(args, options))
}

export async function postV1SourceDefinitionsGetForScope(
  args: InferRequestType<typeof client.v1.source_definitions.get_for_scope.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.get_for_scope.$post(args, options))
}

export async function postV1SourceDefinitionsGrantDefinition(
  args: InferRequestType<typeof client.v1.source_definitions.grant_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.grant_definition.$post(args, options))
}

export async function postV1SourceDefinitionsRevokeDefinition(
  args: InferRequestType<typeof client.v1.source_definitions.revoke_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definitions.revoke_definition.$post(args, options))
}

export async function postV1ActorDefinitionVersionsGetForSource(
  args: InferRequestType<typeof client.v1.actor_definition_versions.get_for_source.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.actor_definition_versions.get_for_source.$post(args, options),
  )
}

export async function postV1SourceDefinitionSpecificationsGet(
  args: InferRequestType<typeof client.v1.source_definition_specifications.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_definition_specifications.get.$post(args, options))
}

export async function postV1SourceDefinitionSpecificationsGetForSource(
  args: InferRequestType<typeof client.v1.source_definition_specifications.get_for_source.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.source_definition_specifications.get_for_source.$post(args, options),
  )
}

export async function postV1ActorDefinitionVersionsResolve(
  args: InferRequestType<typeof client.v1.actor_definition_versions.resolve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.actor_definition_versions.resolve.$post(args, options))
}

export async function postV1ActorDefinitionVersionsGetDefault(
  args: InferRequestType<typeof client.v1.actor_definition_versions.get_default.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.actor_definition_versions.get_default.$post(args, options))
}

export async function postV1ActorDefinitionsCreate(
  args: InferRequestType<typeof client.v1.actor_definitions.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.actor_definitions.create.$post(args, options))
}

export async function postV1ActorDefinitionsUpdate(
  args: InferRequestType<typeof client.v1.actor_definitions.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.actor_definitions.update.$post(args, options))
}

export async function postV1ActorDefinitionsFinish(
  args: InferRequestType<typeof client.v1.actor_definitions.finish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.actor_definitions.finish.$post(args, options))
}

export async function postV1ActorDefinitionsResult(
  args: InferRequestType<typeof client.v1.actor_definitions.result.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.actor_definitions.result.$post(args, options))
}

export async function postV1DeclarativeSourceDefinitionsCreateManifest(
  args: InferRequestType<typeof client.v1.declarative_source_definitions.create_manifest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.declarative_source_definitions.create_manifest.$post(args, options),
  )
}

export async function postV1DeclarativeSourceDefinitionsUpdateActiveManifest(
  args: InferRequestType<
    typeof client.v1.declarative_source_definitions.update_active_manifest.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.declarative_source_definitions.update_active_manifest.$post(args, options),
  )
}

export async function postV1DeclarativeSourceDefinitionsListManifests(
  args: InferRequestType<typeof client.v1.declarative_source_definitions.list_manifests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.declarative_source_definitions.list_manifests.$post(args, options),
  )
}

export async function postV1ConnectorBuilderProjectsCreate(
  args: InferRequestType<typeof client.v1.connector_builder_projects.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.create.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsPublish(
  args: InferRequestType<typeof client.v1.connector_builder_projects.publish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.publish.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsGetBaseImage(
  args: InferRequestType<typeof client.v1.connector_builder_projects.get_base_image.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.get_base_image.$post(args, options),
  )
}

export async function postV1ConnectorBuilderProjectsUpdate(
  args: InferRequestType<typeof client.v1.connector_builder_projects.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.update.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsDelete(
  args: InferRequestType<typeof client.v1.connector_builder_projects.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.delete.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsList(
  args: InferRequestType<typeof client.v1.connector_builder_projects.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.list.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsGetWithManifest(
  args: InferRequestType<typeof client.v1.connector_builder_projects.get_with_manifest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.get_with_manifest.$post(args, options),
  )
}

export async function postV1ConnectorBuilderProjectsGetForDefinitionId(
  args: InferRequestType<typeof client.v1.connector_builder_projects.get_for_definition_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.get_for_definition_id.$post(args, options),
  )
}

export async function postV1ConnectorBuilderProjectsUpdateTestingValues(
  args: InferRequestType<typeof client.v1.connector_builder_projects.update_testing_values.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.update_testing_values.$post(args, options),
  )
}

export async function postV1ConnectorBuilderProjectsReadStream(
  args: InferRequestType<typeof client.v1.connector_builder_projects.read_stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.read_stream.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsFullResolve(
  args: InferRequestType<typeof client.v1.connector_builder_projects.full_resolve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.full_resolve.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsResolve(
  args: InferRequestType<typeof client.v1.connector_builder_projects.resolve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.resolve.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsCapabilities(
  args: InferRequestType<typeof client.v1.connector_builder_projects.capabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.capabilities.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsFork(
  args: InferRequestType<typeof client.v1.connector_builder_projects.fork.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_projects.fork.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsContributeCheck(
  args: InferRequestType<typeof client.v1.connector_builder_projects.contribute.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.contribute.check.$post(args, options),
  )
}

export async function postV1ConnectorBuilderProjectsContributeGenerate(
  args: InferRequestType<typeof client.v1.connector_builder_projects.contribute.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.contribute.generate.$post(args, options),
  )
}

export async function postV1ConnectorBuilderAssistProcess(
  args: InferRequestType<typeof client.v1.connector_builder_assist.process.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_assist.process.$post(args, options))
}

export async function postV1ConnectorBuilderAssistWarm(
  args: InferRequestType<typeof client.v1.connector_builder_assist.warm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_builder_assist.warm.$post(args, options))
}

export async function postV1ConnectorDocumentationGet(
  args: InferRequestType<typeof client.v1.connector_documentation.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_documentation.get.$post(args, options))
}

export async function postV1SourcesCreate(
  args: InferRequestType<typeof client.v1.sources.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.create.$post(args, options))
}

export async function postV1SourcesUpdate(
  args: InferRequestType<typeof client.v1.sources.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.update.$post(args, options))
}

export async function postV1SourcesPartialUpdate(
  args: InferRequestType<typeof client.v1.sources.partial_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.partial_update.$post(args, options))
}

export async function postV1SourcesUpgradeVersion(
  args: InferRequestType<typeof client.v1.sources.upgrade_version.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.upgrade_version.$post(args, options))
}

export async function postV1SourcesList(
  args: InferRequestType<typeof client.v1.sources.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.list.$post(args, options))
}

export async function postV1SourcesListPaginated(
  args: InferRequestType<typeof client.v1.sources.list_paginated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.list_paginated.$post(args, options))
}

export async function postV1SourcesGet(
  args: InferRequestType<typeof client.v1.sources.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.get.$post(args, options))
}

export async function postV1SourcesGetWithMetadata(
  args: InferRequestType<typeof client.v1.sources.get_with_metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.get_with_metadata.$post(args, options))
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

export async function postV1SourcesDelete(
  args: InferRequestType<typeof client.v1.sources.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.delete.$post(args, options))
}

export async function getV1WorkspacesWorkspaceIdSkillsDocs(
  args: InferRequestType<(typeof client.v1.workspaces)[':workspaceId']['skills']['docs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workspaces[':workspaceId'].skills.docs.$get(args, options))
}

export async function postV1DestinationsDestinationIdExecute(
  args: InferRequestType<(typeof client.v1.destinations)[':destinationId']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations[':destinationId'].execute.$post(args, options))
}

export async function postV1SourcesSourceIdExecute(
  args: InferRequestType<(typeof client.v1.sources)[':sourceId']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':sourceId'].execute.$post(args, options))
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

export async function postV1SourcesDiscoverSchema(
  args: InferRequestType<typeof client.v1.sources.discover_schema.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.discover_schema.$post(args, options))
}

export async function postV1SourcesApplySchemaChanges(
  args: InferRequestType<typeof client.v1.sources.apply_schema_changes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.apply_schema_changes.$post(args, options))
}

export async function postV1SourcesWriteDiscoverCatalogResult(
  args: InferRequestType<typeof client.v1.sources.write_discover_catalog_result.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.write_discover_catalog_result.$post(args, options))
}

export async function postV1DestinationsWriteDiscoverCatalogResult(
  args: InferRequestType<typeof client.v1.destinations.write_discover_catalog_result.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destinations.write_discover_catalog_result.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsUpdate(
  args: InferRequestType<typeof client.v1.destination_definitions.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.update.$post(args, options))
}

export async function postV1DestinationDefinitionsList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.destination_definitions.list.$post(undefined, options))
}

export async function postV1DestinationDefinitionsListLatest(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.destination_definitions.list_latest.$post(undefined, options),
  )
}

export async function postV1DestinationDefinitionsGet(
  args: InferRequestType<typeof client.v1.destination_definitions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.get.$post(args, options))
}

export async function postV1DestinationDefinitionsDelete(
  args: InferRequestType<typeof client.v1.destination_definitions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.delete.$post(args, options))
}

export async function postV1DestinationDefinitionsListPrivate(
  args: InferRequestType<typeof client.v1.destination_definitions.list_private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.list_private.$post(args, options))
}

export async function postV1DestinationDefinitionsListForWorkspace(
  args: InferRequestType<typeof client.v1.destination_definitions.list_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.list_for_workspace.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsListEnterpriseStubsForWorkspace(
  args: InferRequestType<
    typeof client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.list_enterprise_stubs_for_workspace.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsCreateCustom(
  args: InferRequestType<typeof client.v1.destination_definitions.create_custom.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.create_custom.$post(args, options))
}

export async function postV1DestinationDefinitionsGetForWorkspace(
  args: InferRequestType<typeof client.v1.destination_definitions.get_for_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.get_for_workspace.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsGetForScope(
  args: InferRequestType<typeof client.v1.destination_definitions.get_for_scope.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_definitions.get_for_scope.$post(args, options))
}

export async function postV1DestinationDefinitionsGrantDefinition(
  args: InferRequestType<typeof client.v1.destination_definitions.grant_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.grant_definition.$post(args, options),
  )
}

export async function postV1DestinationDefinitionsRevokeDefinition(
  args: InferRequestType<typeof client.v1.destination_definitions.revoke_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definitions.revoke_definition.$post(args, options),
  )
}

export async function postV1ActorDefinitionVersionsGetForDestination(
  args: InferRequestType<typeof client.v1.actor_definition_versions.get_for_destination.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.actor_definition_versions.get_for_destination.$post(args, options),
  )
}

export async function postV1DestinationDefinitionSpecificationsGet(
  args: InferRequestType<typeof client.v1.destination_definition_specifications.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definition_specifications.get.$post(args, options),
  )
}

export async function postV1DestinationDefinitionSpecificationsGetForDestination(
  args: InferRequestType<
    typeof client.v1.destination_definition_specifications.get_for_destination.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.destination_definition_specifications.get_for_destination.$post(args, options),
  )
}

export async function postV1DestinationsCreate(
  args: InferRequestType<typeof client.v1.destinations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.create.$post(args, options))
}

export async function postV1DestinationsUpdate(
  args: InferRequestType<typeof client.v1.destinations.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.update.$post(args, options))
}

export async function postV1DestinationsPartialUpdate(
  args: InferRequestType<typeof client.v1.destinations.partial_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.partial_update.$post(args, options))
}

export async function postV1DestinationsUpgradeVersion(
  args: InferRequestType<typeof client.v1.destinations.upgrade_version.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.upgrade_version.$post(args, options))
}

export async function postV1DestinationsList(
  args: InferRequestType<typeof client.v1.destinations.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.list.$post(args, options))
}

export async function postV1DestinationsListPaginated(
  args: InferRequestType<typeof client.v1.destinations.list_paginated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.list_paginated.$post(args, options))
}

export async function postV1DestinationsGet(
  args: InferRequestType<typeof client.v1.destinations.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.get.$post(args, options))
}

export async function postV1DestinationsDiscoverSchema(
  args: InferRequestType<typeof client.v1.destinations.discover_schema.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.discover_schema.$post(args, options))
}

export async function postV1DestinationsGetCatalogForConnection(
  args: InferRequestType<typeof client.v1.destinations.get_catalog_for_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.get_catalog_for_connection.$post(args, options))
}

export async function postV1DestinationsSearch(
  args: InferRequestType<typeof client.v1.destinations.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.search.$post(args, options))
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

export async function postV1DestinationsDelete(
  args: InferRequestType<typeof client.v1.destinations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destinations.delete.$post(args, options))
}

export async function postV1ConnectionsCreate(
  args: InferRequestType<typeof client.v1.connections.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.create.$post(args, options))
}

export async function postV1ConnectionsUpdate(
  args: InferRequestType<typeof client.v1.connections.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.update.$post(args, options))
}

export async function postV1ConnectionsUpdateWithReason(
  args: InferRequestType<typeof client.v1.connections.update_with_reason.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.update_with_reason.$post(args, options))
}

export async function postV1ConnectionsList(
  args: InferRequestType<typeof client.v1.connections.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.list.$post(args, options))
}

export async function postV1ConnectionsListPaginated(
  args: InferRequestType<typeof client.v1.connections.list_paginated.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.list_paginated.$post(args, options))
}

export async function postV1ConnectionsListAll(
  args: InferRequestType<typeof client.v1.connections.list_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.list_all.$post(args, options))
}

export async function postV1ConnectionsStatus(
  args: InferRequestType<typeof client.v1.connections.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.status.$post(args, options))
}

export async function postV1ConnectionsSyncProgress(
  args: InferRequestType<typeof client.v1.connections.sync_progress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.sync_progress.$post(args, options))
}

export async function postV1ConnectionsHistoryUptime(
  args: InferRequestType<typeof client.v1.connections.history.uptime.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.history.uptime.$post(args, options))
}

export async function postV1ConnectionsHistoryData(
  args: InferRequestType<typeof client.v1.connections.history.data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.history.data.$post(args, options))
}

export async function postV1ConnectionsStreamHistory(
  args: InferRequestType<typeof client.v1.connections.stream_history.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.stream_history.$post(args, options))
}

export async function postV1ConnectionsEventsGet(
  args: InferRequestType<typeof client.v1.connections.events.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.events.get.$post(args, options))
}

export async function postV1ConnectionsEventsList(
  args: InferRequestType<typeof client.v1.connections.events.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.events.list.$post(args, options))
}

export async function postV1ConnectionsEventsListMinimal(
  args: InferRequestType<typeof client.v1.connections.events.list_minimal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.events.list_minimal.$post(args, options))
}

export async function postV1ConnectionsEventsBackfill(
  args: InferRequestType<typeof client.v1.connections.events.backfill.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.events.backfill.$post(args, options))
}

export async function postV1ConnectionsEventsListForJob(
  args: InferRequestType<typeof client.v1.connections.events.list_for_job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.events.list_for_job.$post(args, options))
}

export async function postV1ConnectionsLastJobPerStream(
  args: InferRequestType<typeof client.v1.connections.last_job_per_stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.last_job_per_stream.$post(args, options))
}

export async function postV1ConnectionsGet(
  args: InferRequestType<typeof client.v1.connections.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.get.$post(args, options))
}

export async function postV1ConnectionsGetForJob(
  args: InferRequestType<typeof client.v1.connections.getForJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.getForJob.$post(args, options))
}

export async function postV1ConnectionsListByActorDefinition(
  args: InferRequestType<typeof client.v1.connections.list_by_actor_definition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.list_by_actor_definition.$post(args, options))
}

export async function postV1ConnectionsApplySchemaChanges(
  args: InferRequestType<typeof client.v1.connections.apply_schema_changes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.apply_schema_changes.$post(args, options))
}

export async function postV1ConnectionsPostprocessDiscoveredCatalog(
  args: InferRequestType<typeof client.v1.connections.postprocess_discovered_catalog.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connections.postprocess_discovered_catalog.$post(args, options),
  )
}

export async function postV1ConnectionsGetContext(
  args: InferRequestType<typeof client.v1.connections.get_context.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.get_context.$post(args, options))
}

export async function postV1StateGet(
  args: InferRequestType<typeof client.v1.state.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.state.get.$post(args, options))
}

export async function postV1StateCreateOrUpdate(
  args: InferRequestType<typeof client.v1.state.create_or_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.state.create_or_update.$post(args, options))
}

export async function postV1StateCreateOrUpdateSafe(
  args: InferRequestType<typeof client.v1.state.create_or_update_safe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.state.create_or_update_safe.$post(args, options))
}

export async function postV1ConnectionsSearch(
  args: InferRequestType<typeof client.v1.connections.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.search.$post(args, options))
}

export async function postV1ConnectionsDelete(
  args: InferRequestType<typeof client.v1.connections.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.delete.$post(args, options))
}

export async function postV1ConnectionsSync(
  args: InferRequestType<typeof client.v1.connections.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.sync.$post(args, options))
}

export async function postV1ConnectionsReset(
  args: InferRequestType<typeof client.v1.connections.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.reset.$post(args, options))
}

export async function postV1ConnectionsClear(
  args: InferRequestType<typeof client.v1.connections.clear.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.clear.$post(args, options))
}

export async function postV1ConnectionsAutoDisable(
  args: InferRequestType<typeof client.v1.connections.auto_disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.auto_disable.$post(args, options))
}

export async function postV1ConnectionsClearStream(
  args: InferRequestType<typeof client.v1.connections.clear.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.clear.stream.$post(args, options))
}

export async function postV1ConnectionsResetStream(
  args: InferRequestType<typeof client.v1.connections.reset.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.reset.stream.$post(args, options))
}

export async function postV1ConnectionsRefresh(
  args: InferRequestType<typeof client.v1.connections.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.refresh.$post(args, options))
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

export async function postV1OperationsUpdate(
  args: InferRequestType<typeof client.v1.operations.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.update.$post(args, options))
}

export async function postV1OperationsList(
  args: InferRequestType<typeof client.v1.operations.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.list.$post(args, options))
}

export async function postV1OperationsGet(
  args: InferRequestType<typeof client.v1.operations.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.get.$post(args, options))
}

export async function postV1OperationsDelete(
  args: InferRequestType<typeof client.v1.operations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.delete.$post(args, options))
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

export async function postV1SchedulerDestinationsCheckConnection(
  args: InferRequestType<typeof client.v1.scheduler.destinations.check_connection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scheduler.destinations.check_connection.$post(args, options))
}

export async function postV1SourceOauthsOauthParamsCreate(
  args: InferRequestType<typeof client.v1.source_oauths.oauth_params.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.oauth_params.create.$post(args, options))
}

export async function postV1SourceOauthsGetConsentUrl(
  args: InferRequestType<typeof client.v1.source_oauths.get_consent_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.get_consent_url.$post(args, options))
}

export async function postV1SourceOauthsGetEmbeddedConsentUrl(
  args: InferRequestType<typeof client.v1.source_oauths.get_embedded_consent_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.get_embedded_consent_url.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsGetOauthConsentUrl(
  args: InferRequestType<typeof client.v1.connector_builder_projects.get_oauth_consent_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.get_oauth_consent_url.$post(args, options),
  )
}

export async function postV1SourceOauthsCompleteOauth(
  args: InferRequestType<typeof client.v1.source_oauths.complete_oauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.complete_oauth.$post(args, options))
}

export async function postV1ConnectorBuilderProjectsCompleteOauth(
  args: InferRequestType<typeof client.v1.connector_builder_projects.complete_oauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_builder_projects.complete_oauth.$post(args, options),
  )
}

export async function postV1SourceOauthsRevoke(
  args: InferRequestType<typeof client.v1.source_oauths.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.revoke.$post(args, options))
}

export async function postV1SourceOauthsGetScopes(
  args: InferRequestType<typeof client.v1.source_oauths.get_scopes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_oauths.get_scopes.$post(args, options))
}

export async function postV1DestinationOauthsGetConsentUrl(
  args: InferRequestType<typeof client.v1.destination_oauths.get_consent_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_oauths.get_consent_url.$post(args, options))
}

export async function postV1DestinationOauthsCompleteOauth(
  args: InferRequestType<typeof client.v1.destination_oauths.complete_oauth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_oauths.complete_oauth.$post(args, options))
}

export async function postV1DestinationOauthsOauthParamsCreate(
  args: InferRequestType<typeof client.v1.destination_oauths.oauth_params.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.destination_oauths.oauth_params.create.$post(args, options))
}

export async function postV1WebBackendCheckUpdates(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.web_backend.check_updates.$post(undefined, options))
}

export async function postV1WebBackendMappersValidate(
  args: InferRequestType<typeof client.v1.web_backend.mappers.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.mappers.validate.$post(args, options))
}

export async function postV1WebBackendConnectionsList(
  args: InferRequestType<typeof client.v1.web_backend.connections.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.list.$post(args, options))
}

export async function postV1WebBackendConnectionsStatusCounts(
  args: InferRequestType<typeof client.v1.web_backend.connections.status_counts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.status_counts.$post(args, options))
}

export async function postV1WebBackendConnectionsGet(
  args: InferRequestType<typeof client.v1.web_backend.connections.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.get.$post(args, options))
}

export async function postV1WebBackendConnectionsCreate(
  args: InferRequestType<typeof client.v1.web_backend.connections.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.create.$post(args, options))
}

export async function postV1WebBackendConnectionsUpdate(
  args: InferRequestType<typeof client.v1.web_backend.connections.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.connections.update.$post(args, options))
}

export async function postV1WebBackendDescribeCronExpression(
  args: InferRequestType<typeof client.v1.web_backend.describe_cron_expression.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.web_backend.describe_cron_expression.$post(args, options))
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

export async function getV1WebBackendConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.web_backend.config.$get(undefined, options))
}

export async function postV1JobsCreate(
  args: InferRequestType<typeof client.v1.jobs.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.create.$post(args, options))
}

export async function postV1JobsJobSuccessWithAttemptNumber(
  args: InferRequestType<typeof client.v1.jobs.job_success_with_attempt_number.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.job_success_with_attempt_number.$post(args, options))
}

export async function postV1JobsList(
  args: InferRequestType<typeof client.v1.jobs.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.list.$post(args, options))
}

export async function postV1JobsListForWorkspaces(
  args: InferRequestType<typeof client.v1.jobs.list_for_workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.list_for_workspaces.$post(args, options))
}

export async function postV1JobsGet(
  args: InferRequestType<typeof client.v1.jobs.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get.$post(args, options))
}

export async function postV1JobsGetLastReplicationJob(
  args: InferRequestType<typeof client.v1.jobs.get_last_replication_job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_last_replication_job.$post(args, options))
}

export async function postV1JobsGetLastReplicationJobWithCancel(
  args: InferRequestType<typeof client.v1.jobs.get_last_replication_job_with_cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.jobs.get_last_replication_job_with_cancel.$post(args, options),
  )
}

export async function postV1JobsGetWithoutLogs(
  args: InferRequestType<typeof client.v1.jobs.get_without_logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_without_logs.$post(args, options))
}

export async function postV1JobsGetLight(
  args: InferRequestType<typeof client.v1.jobs.get_light.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_light.$post(args, options))
}

export async function postV1JobsCancel(
  args: InferRequestType<typeof client.v1.jobs.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.cancel.$post(args, options))
}

export async function postV1JobsGetDebugInfo(
  args: InferRequestType<typeof client.v1.jobs.get_debug_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_debug_info.$post(args, options))
}

export async function postV1JobsGetInput(
  args: InferRequestType<typeof client.v1.jobs.get_input.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.get_input.$post(args, options))
}

export async function postV1JobsFailNonTerminal(
  args: InferRequestType<typeof client.v1.jobs.fail_non_terminal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.fail_non_terminal.$post(args, options))
}

export async function postV1JobsReportJobStart(
  args: InferRequestType<typeof client.v1.jobs.reportJobStart.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.reportJobStart.$post(args, options))
}

export async function postV1JobsSetJobQueued(
  args: InferRequestType<typeof client.v1.jobs.setJobQueued.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.setJobQueued.$post(args, options))
}

export async function postV1JobsCancelQueuedJob(
  args: InferRequestType<typeof client.v1.jobs.cancelQueuedJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.cancelQueuedJob.$post(args, options))
}

export async function postV1JobsCheckDataWorkerCapacity(
  args: InferRequestType<typeof client.v1.jobs.checkDataWorkerCapacity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.checkDataWorkerCapacity.$post(args, options))
}

export async function postV1JobsGetWebhookConfig(
  args: InferRequestType<typeof client.v1.jobs.getWebhookConfig.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.getWebhookConfig.$post(args, options))
}

export async function postV1JobsJobFailure(
  args: InferRequestType<typeof client.v1.jobs.job_failure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.job_failure.$post(args, options))
}

export async function postV1JobsDeleteStreamResetRecords(
  args: InferRequestType<typeof client.v1.jobs.delete_stream_reset_records.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.delete_stream_reset_records.$post(args, options))
}

export async function postV1JobsExplain(
  args: InferRequestType<typeof client.v1.jobs.explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.explain.$post(args, options))
}

export async function postV1JobsEvaluateOutlier(
  args: InferRequestType<typeof client.v1.jobs.evaluate_outlier.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.evaluate_outlier.$post(args, options))
}

export async function postV1JobsFinalize(
  args: InferRequestType<typeof client.v1.jobs.finalize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.finalize.$post(args, options))
}

export async function postV1UsersGet(
  args: InferRequestType<typeof client.v1.users.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.get.$post(args, options))
}

export async function postV1UsersGetByAuthId(
  args: InferRequestType<typeof client.v1.users.get_by_auth_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.get_by_auth_id.$post(args, options))
}

export async function postV1UsersGetByEmail(
  args: InferRequestType<typeof client.v1.users.get_by_email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.get_by_email.$post(args, options))
}

export async function postV1UsersGetOrCreateByAuthId(
  args: InferRequestType<typeof client.v1.users.get_or_create_by_auth_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.get_or_create_by_auth_id.$post(args, options))
}

export async function postV1UsersUpdate(
  args: InferRequestType<typeof client.v1.users.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.update.$post(args, options))
}

export async function postV1UsersDelete(
  args: InferRequestType<typeof client.v1.users.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.delete.$post(args, options))
}

export async function postV1UsersListAccessInfoByWorkspaceId(
  args: InferRequestType<typeof client.v1.users.list_access_info_by_workspace_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.list_access_info_by_workspace_id.$post(args, options))
}

export async function postV1UsersListByOrganizationId(
  args: InferRequestType<typeof client.v1.users.list_by_organization_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.list_by_organization_id.$post(args, options))
}

export async function postV1UsersListInstanceAdmin(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.users.list_instance_admin.$post(undefined, options))
}

export async function postV1PermissionsCreate(
  args: InferRequestType<typeof client.v1.permissions.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.create.$post(args, options))
}

export async function postV1PermissionsGet(
  args: InferRequestType<typeof client.v1.permissions.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.get.$post(args, options))
}

export async function postV1PermissionsCheck(
  args: InferRequestType<typeof client.v1.permissions.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.check.$post(args, options))
}

export async function postV1PermissionsCheckMultipleWorkspaces(
  args: InferRequestType<typeof client.v1.permissions.check_multiple_workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.check_multiple_workspaces.$post(args, options))
}

export async function postV1PermissionsUpdate(
  args: InferRequestType<typeof client.v1.permissions.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.update.$post(args, options))
}

export async function postV1SecretsPersistenceConfigGet(
  args: InferRequestType<typeof client.v1.secrets_persistence_config.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secrets_persistence_config.get.$post(args, options))
}

export async function postV1SecretsPersistenceConfigCreateOrUpdate(
  args: InferRequestType<typeof client.v1.secrets_persistence_config.create_or_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.secrets_persistence_config.create_or_update.$post(args, options),
  )
}

export async function postV1SecretStorageCreate(
  args: InferRequestType<typeof client.v1.secret_storage.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secret_storage.create.$post(args, options))
}

export async function postV1SecretStorageList(
  args: InferRequestType<typeof client.v1.secret_storage.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secret_storage.list.$post(args, options))
}

export async function postV1SecretStorageDelete(
  args: InferRequestType<typeof client.v1.secret_storage.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secret_storage.delete.$post(args, options))
}

export async function postV1SecretStorageGet(
  args: InferRequestType<typeof client.v1.secret_storage.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secret_storage.get.$post(args, options))
}

export async function postV1SecretStorageMigrate(
  args: InferRequestType<typeof client.v1.secret_storage.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.secret_storage.migrate.$post(args, options))
}

export async function postV1PermissionsDelete(
  args: InferRequestType<typeof client.v1.permissions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.delete.$post(args, options))
}

export async function postV1PermissionsDeleteUserFromWorkspace(
  args: InferRequestType<typeof client.v1.permissions.delete_user_from_workspace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.delete_user_from_workspace.$post(args, options))
}

export async function postV1PermissionsListByUser(
  args: InferRequestType<typeof client.v1.permissions.list_by_user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions.list_by_user.$post(args, options))
}

export async function getV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.health.$get(undefined, options))
}

export async function getV1Openapi(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.openapi.$get(undefined, options))
}

export async function postV1AttemptCreateNewAttemptNumber(
  args: InferRequestType<typeof client.v1.attempt.create_new_attempt_number.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.create_new_attempt_number.$post(args, options))
}

export async function postV1AttemptSaveStreamMetadata(
  args: InferRequestType<typeof client.v1.attempt.save_stream_metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.save_stream_metadata.$post(args, options))
}

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

export async function postV1AttemptFail(
  args: InferRequestType<typeof client.v1.attempt.fail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.fail.$post(args, options))
}

export async function postV1AttemptGetCombinedStats(
  args: InferRequestType<typeof client.v1.attempt.get_combined_stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.get_combined_stats.$post(args, options))
}

export async function postV1AttemptGetForJob(
  args: InferRequestType<typeof client.v1.attempt.get_for_job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attempt.get_for_job.$post(args, options))
}

export async function postV1StreamStatusesList(
  args: InferRequestType<typeof client.v1.stream_statuses.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stream_statuses.list.$post(args, options))
}

export async function postV1StreamStatusesLatestPerRunState(
  args: InferRequestType<typeof client.v1.stream_statuses.latest_per_run_state.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stream_statuses.latest_per_run_state.$post(args, options))
}

export async function postV1StreamStatusesCreate(
  args: InferRequestType<typeof client.v1.stream_statuses.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stream_statuses.create.$post(args, options))
}

export async function postV1StreamStatusesUpdate(
  args: InferRequestType<typeof client.v1.stream_statuses.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.stream_statuses.update.$post(args, options))
}

export async function getV1InstanceConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.instance_configuration.$get(undefined, options))
}

export async function postV1InstanceConfigurationSetup(
  args: InferRequestType<typeof client.v1.instance_configuration.setup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instance_configuration.setup.$post(args, options))
}

export async function postV1JobsRetryStatesCreateOrUpdate(
  args: InferRequestType<typeof client.v1.jobs.retry_states.create_or_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.retry_states.create_or_update.$post(args, options))
}

export async function postV1JobsRetryStatesGet(
  args: InferRequestType<typeof client.v1.jobs.retry_states.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.retry_states.get.$post(args, options))
}

export async function postV1JobsDidPreviousJobSucceed(
  args: InferRequestType<typeof client.v1.jobs.did_previous_job_succeed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.did_previous_job_succeed.$post(args, options))
}

export async function postV1JobsPersistCancellation(
  args: InferRequestType<typeof client.v1.jobs.persist_cancellation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jobs.persist_cancellation.$post(args, options))
}

export async function postV1BillingCustomerPortal(
  args: InferRequestType<typeof client.v1.billing.customer_portal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.customer_portal.$post(args, options))
}

export async function postV1BillingBackfillUsage(
  args: InferRequestType<typeof client.v1.billing.backfill_usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.backfill_usage.$post(args, options))
}

export async function postV1BillingHandleWebhook(
  args: InferRequestType<typeof client.v1.billing.handle_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.handle_webhook.$post(args, options))
}

export async function postV1BillingListInvoices(
  args: InferRequestType<typeof client.v1.billing.list_invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.list_invoices.$post(args, options))
}

export async function postV1BillingPaymentInformation(
  args: InferRequestType<typeof client.v1.billing.payment_information.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.payment_information.$post(args, options))
}

export async function postV1BillingSubscriptionInfo(
  args: InferRequestType<typeof client.v1.billing.subscription_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscription_info.$post(args, options))
}

export async function postV1BillingTrialStatus(
  args: InferRequestType<typeof client.v1.billing.trial_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.trial_status.$post(args, options))
}

export async function postV1BillingCancelSubscription(
  args: InferRequestType<typeof client.v1.billing.cancel_subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.cancel_subscription.$post(args, options))
}

export async function postV1BillingUnscheduleCancelSubscription(
  args: InferRequestType<typeof client.v1.billing.unschedule_cancel_subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.unschedule_cancel_subscription.$post(args, options))
}

export async function postV1BillingUnschedulePlanChange(
  args: InferRequestType<typeof client.v1.billing.unschedule_plan_change.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.unschedule_plan_change.$post(args, options))
}

export async function postV1BillingDisableDelinquentWorkspaces(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.billing.disable_delinquent_workspaces.$post(undefined, options),
  )
}

export async function postV1BillingNotificationSettingsGet(
  args: InferRequestType<typeof client.v1.billing.notification_settings.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.notification_settings.get.$post(args, options))
}

export async function postV1BillingNotificationSettingsUpdate(
  args: InferRequestType<typeof client.v1.billing.notification_settings.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.notification_settings.update.$post(args, options))
}

export async function getV1OrganizationPaymentConfigOrganizationId(
  args: InferRequestType<(typeof client.v1.organization_payment_config)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organization_payment_config[':organizationId'].$get(args, options),
  )
}

export async function postV1OrganizationPaymentConfig(
  args: InferRequestType<typeof client.v1.organization_payment_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organization_payment_config.$post(args, options))
}

export async function postV1OrganizationPaymentConfigOrganizationIdEndGracePeriod(
  args: InferRequestType<
    (typeof client.v1.organization_payment_config)[':organizationId']['end_grace_period']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organization_payment_config[':organizationId'].end_grace_period.$post(args, options),
  )
}

export async function postV1OrganizationsGet(
  args: InferRequestType<typeof client.v1.organizations.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.get.$post(args, options))
}

export async function postV1OrganizationsGetSemanticSearchEnablement(
  args: InferRequestType<typeof client.v1.organizations.get_semantic_search_enablement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations.get_semantic_search_enablement.$post(args, options),
  )
}

export async function postV1OrganizationsUpdateSemanticSearchEnablement(
  args: InferRequestType<typeof client.v1.organizations.update_semantic_search_enablement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations.update_semantic_search_enablement.$post(args, options),
  )
}

export async function postV1OrganizationsOnboardingUpdate(
  args: InferRequestType<typeof client.v1.organizations.onboarding.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.onboarding.update.$post(args, options))
}

export async function postV1OrganizationsOnboardingSendMobileHandoffEmail(
  args: InferRequestType<typeof client.v1.organizations.onboarding.send_mobile_handoff_email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations.onboarding.send_mobile_handoff_email.$post(args, options),
  )
}

export async function postV1OrganizationsCreate(
  args: InferRequestType<typeof client.v1.organizations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.create.$post(args, options))
}

export async function postV1OrganizationsUpdate(
  args: InferRequestType<typeof client.v1.organizations.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.update.$post(args, options))
}

export async function postV1OrganizationsAgenticStatus(
  args: InferRequestType<typeof client.v1.organizations.agentic_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.agentic_status.$post(args, options))
}

export async function postV1OrganizationsDelete(
  args: InferRequestType<typeof client.v1.organizations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.delete.$post(args, options))
}

export async function postV1OrganizationsListByUserId(
  args: InferRequestType<typeof client.v1.organizations.list_by_user_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.list_by_user_id.$post(args, options))
}

export async function postV1OrganizationsGetUsage(
  args: InferRequestType<typeof client.v1.organizations.get_usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.get_usage.$post(args, options))
}

export async function postV1OrganizationsGetDataWorkerUsage(
  args: InferRequestType<typeof client.v1.organizations.get_data_worker_usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.get_data_worker_usage.$post(args, options))
}

export async function postV1OrganizationsListSummaries(
  args: InferRequestType<typeof client.v1.organizations.list_summaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.list_summaries.$post(args, options))
}

export async function postV1OrganizationsGetOrganizationInfo(
  args: InferRequestType<typeof client.v1.organizations.get_organization_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.get_organization_info.$post(args, options))
}

export async function postV1GroupsList(
  args: InferRequestType<typeof client.v1.groups.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.list.$post(args, options))
}

export async function postV1GroupsGet(
  args: InferRequestType<typeof client.v1.groups.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.get.$post(args, options))
}

export async function postV1GroupsCreate(
  args: InferRequestType<typeof client.v1.groups.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.create.$post(args, options))
}

export async function postV1GroupsUpdate(
  args: InferRequestType<typeof client.v1.groups.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.update.$post(args, options))
}

export async function postV1GroupsDelete(
  args: InferRequestType<typeof client.v1.groups.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.delete.$post(args, options))
}

export async function postV1GroupsListMembers(
  args: InferRequestType<typeof client.v1.groups.list_members.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.list_members.$post(args, options))
}

export async function postV1GroupsAddMember(
  args: InferRequestType<typeof client.v1.groups.add_member.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.add_member.$post(args, options))
}

export async function postV1GroupsRemoveMember(
  args: InferRequestType<typeof client.v1.groups.remove_member.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.groups.remove_member.$post(args, options))
}

export async function postV1GroupPermissionsList(
  args: InferRequestType<typeof client.v1.group_permissions.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.group_permissions.list.$post(args, options))
}

export async function postV1GroupPermissionsCreate(
  args: InferRequestType<typeof client.v1.group_permissions.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.group_permissions.create.$post(args, options))
}

export async function postV1GroupPermissionsDelete(
  args: InferRequestType<typeof client.v1.group_permissions.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.group_permissions.delete.$post(args, options))
}

export async function postV1DomainVerificationsListPending(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.domain_verifications.list_pending.$post(undefined, options))
}

export async function postV1DomainVerificationsCheck(
  args: InferRequestType<typeof client.v1.domain_verifications.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain_verifications.check.$post(args, options))
}

export async function postV1DeploymentMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.deployment.metadata.$post(undefined, options))
}

export async function postV1ApplicationsList(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.applications.list.$post(undefined, options))
}

export async function postV1ApplicationsDelete(
  args: InferRequestType<typeof client.v1.applications.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.applications.delete.$post(args, options))
}

export async function postV1ApplicationsCreate(
  args: InferRequestType<typeof client.v1.applications.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.applications.create.$post(args, options))
}

export async function postV1ApplicationsToken(
  args: InferRequestType<typeof client.v1.applications.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.applications.token.$post(args, options))
}

export async function postV1ScopedConfigurationList(
  args: InferRequestType<typeof client.v1.scoped_configuration.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scoped_configuration.list.$post(args, options))
}

export async function postV1ScopedConfigurationGetContext(
  args: InferRequestType<typeof client.v1.scoped_configuration.get_context.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scoped_configuration.get_context.$post(args, options))
}

export async function postV1ScopedConfigurationCreate(
  args: InferRequestType<typeof client.v1.scoped_configuration.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scoped_configuration.create.$post(args, options))
}

export async function postV1ScopedConfigurationGet(
  args: InferRequestType<typeof client.v1.scoped_configuration.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scoped_configuration.get.$post(args, options))
}

export async function postV1ScopedConfigurationUpdate(
  args: InferRequestType<typeof client.v1.scoped_configuration.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scoped_configuration.update.$post(args, options))
}

export async function postV1ScopedConfigurationDelete(
  args: InferRequestType<typeof client.v1.scoped_configuration.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scoped_configuration.delete.$post(args, options))
}

export async function postV1ConnectorRolloutList(
  args: InferRequestType<typeof client.v1.connector_rollout.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.list.$post(args, options))
}

export async function postV1ConnectorRolloutListByActorDefinitionId(
  args: InferRequestType<typeof client.v1.connector_rollout.list_by_actor_definition_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connector_rollout.list_by_actor_definition_id.$post(args, options),
  )
}

export async function postV1ConnectorRolloutListAll(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.connector_rollout.list_all.$post(undefined, options))
}

export async function postV1ConnectorRolloutGet(
  args: InferRequestType<typeof client.v1.connector_rollout.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.get.$post(args, options))
}

export async function postV1ConnectorRolloutGetActorSyncInfo(
  args: InferRequestType<typeof client.v1.connector_rollout.get_actor_sync_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.get_actor_sync_info.$post(args, options))
}

export async function postV1ConnectorRolloutStart(
  args: InferRequestType<typeof client.v1.connector_rollout.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.start.$post(args, options))
}

export async function postV1ConnectorRolloutRollout(
  args: InferRequestType<typeof client.v1.connector_rollout.rollout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.rollout.$post(args, options))
}

export async function postV1ConnectorRolloutUpdateState(
  args: InferRequestType<typeof client.v1.connector_rollout.update_state.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.update_state.$post(args, options))
}

export async function postV1ConnectorRolloutFinalize(
  args: InferRequestType<typeof client.v1.connector_rollout.finalize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.finalize.$post(args, options))
}

export async function postV1ConnectorRolloutManualStart(
  args: InferRequestType<typeof client.v1.connector_rollout.manual_start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.manual_start.$post(args, options))
}

export async function postV1ConnectorRolloutManualRollout(
  args: InferRequestType<typeof client.v1.connector_rollout.manual_rollout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.manual_rollout.$post(args, options))
}

export async function postV1ConnectorRolloutManualFinalize(
  args: InferRequestType<typeof client.v1.connector_rollout.manual_finalize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.manual_finalize.$post(args, options))
}

export async function postV1ConnectorRolloutManualPause(
  args: InferRequestType<typeof client.v1.connector_rollout.manual_pause.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connector_rollout.manual_pause.$post(args, options))
}

export async function postV1EntitlementsIsEntitled(
  args: InferRequestType<typeof client.v1.entitlements.is_entitled.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entitlements.is_entitled.$post(args, options))
}

export async function postV1EntitlementsGetEntitlements(
  args: InferRequestType<typeof client.v1.entitlements.get_entitlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entitlements.get_entitlements.$post(args, options))
}

export async function postV1EntitlementsListPlans(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.entitlements.list_plans.$post(undefined, options))
}

export async function postV1EntitlementsUpdatePlan(
  args: InferRequestType<typeof client.v1.entitlements.update_plan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entitlements.update_plan.$post(args, options))
}

export async function postV1UserInvitationsCreate(
  args: InferRequestType<typeof client.v1.user_invitations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user_invitations.create.$post(args, options))
}

export async function getV1UserInvitationsByCodeInviteCode(
  args: InferRequestType<(typeof client.v1.user_invitations.by_code)[':inviteCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user_invitations.by_code[':inviteCode'].$get(args, options))
}

export async function postV1UserInvitationsListPending(
  args: InferRequestType<typeof client.v1.user_invitations.list_pending.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user_invitations.list_pending.$post(args, options))
}

export async function postV1UserInvitationsAccept(
  args: InferRequestType<typeof client.v1.user_invitations.accept.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user_invitations.accept.$post(args, options))
}

export async function postV1UserInvitationsDecline(
  args: InferRequestType<typeof client.v1.user_invitations.decline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user_invitations.decline.$post(args, options))
}

export async function postV1UserInvitationsCancel(
  args: InferRequestType<typeof client.v1.user_invitations.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.user_invitations.cancel.$post(args, options))
}

export async function postV1TagsList(
  args: InferRequestType<typeof client.v1.tags.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags.list.$post(args, options))
}

export async function postV1TagsUpdate(
  args: InferRequestType<typeof client.v1.tags.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags.update.$post(args, options))
}

export async function postV1TagsDelete(
  args: InferRequestType<typeof client.v1.tags.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags.delete.$post(args, options))
}

export async function postV1TagsCreate(
  args: InferRequestType<typeof client.v1.tags.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags.create.$post(args, options))
}

export async function postV1DiagnosticToolGenerateReport(
  args: InferRequestType<typeof client.v1.diagnostic_tool.generate_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.diagnostic_tool.generate_report.$post(args, options))
}

export async function postV1Signal(
  args: InferRequestType<typeof client.v1.signal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.signal.$post(args, options))
}

export async function postV1CatalogsDiff(
  args: InferRequestType<typeof client.v1.catalogs.diff.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalogs.diff.$post(args, options))
}

export async function postV1CommandsRunCheck(
  args: InferRequestType<typeof client.v1.commands.run.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.run.check.$post(args, options))
}

export async function postV1CommandsRunDiscover(
  args: InferRequestType<typeof client.v1.commands.run.discover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.run.discover.$post(args, options))
}

export async function postV1CommandsRunConnect(
  args: InferRequestType<typeof client.v1.commands.run.connect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.run.connect.$post(args, options))
}

export async function postV1CommandsRunReplicate(
  args: InferRequestType<typeof client.v1.commands.run.replicate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.run.replicate.$post(args, options))
}

export async function postV1CommandsRunSpec(
  args: InferRequestType<typeof client.v1.commands.run.spec.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.run.spec.$post(args, options))
}

export async function postV1CommandsOutputCheck(
  args: InferRequestType<typeof client.v1.commands.output.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.output.check.$post(args, options))
}

export async function postV1CommandsOutputConnect(
  args: InferRequestType<typeof client.v1.commands.output.connect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.output.connect.$post(args, options))
}

export async function postV1CommandsOutputDiscover(
  args: InferRequestType<typeof client.v1.commands.output.discover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.output.discover.$post(args, options))
}

export async function postV1CommandsOutputReplicate(
  args: InferRequestType<typeof client.v1.commands.output.replicate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.output.replicate.$post(args, options))
}

export async function postV1CommandsOutputSpec(
  args: InferRequestType<typeof client.v1.commands.output.spec.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.output.spec.$post(args, options))
}

export async function postV1CommandsStatus(
  args: InferRequestType<typeof client.v1.commands.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.status.$post(args, options))
}

export async function postV1CommandsGet(
  args: InferRequestType<typeof client.v1.commands.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.get.$post(args, options))
}

export async function postV1CommandsCancel(
  args: InferRequestType<typeof client.v1.commands.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.cancel.$post(args, options))
}

export async function postV1WorkloadOutputWrite(
  args: InferRequestType<typeof client.v1.workload_output.write.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workload_output.write.$post(args, options))
}

export async function postV1DataplaneGroupCreate(
  args: InferRequestType<typeof client.v1.dataplane_group.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplane_group.create.$post(args, options))
}

export async function postV1DataplaneGroupUpdate(
  args: InferRequestType<typeof client.v1.dataplane_group.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplane_group.update.$post(args, options))
}

export async function postV1DataplaneGroupDelete(
  args: InferRequestType<typeof client.v1.dataplane_group.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplane_group.delete.$post(args, options))
}

export async function postV1DataplaneGroupList(
  args: InferRequestType<typeof client.v1.dataplane_group.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplane_group.list.$post(args, options))
}

export async function postV1DataWorkerAllocationList(
  args: InferRequestType<typeof client.v1.data_worker_allocation.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data_worker_allocation.list.$post(args, options))
}

export async function postV1DataWorkerAllocationGet(
  args: InferRequestType<typeof client.v1.data_worker_allocation.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data_worker_allocation.get.$post(args, options))
}

export async function postV1DataWorkerAllocationReallocate(
  args: InferRequestType<typeof client.v1.data_worker_allocation.reallocate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data_worker_allocation.reallocate.$post(args, options))
}

export async function postV1DataWorkerAllocationAddCapacity(
  args: InferRequestType<typeof client.v1.data_worker_allocation.add_capacity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data_worker_allocation.add_capacity.$post(args, options))
}

export async function postV1DataWorkerAllocationRemoveCapacity(
  args: InferRequestType<typeof client.v1.data_worker_allocation.remove_capacity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.data_worker_allocation.remove_capacity.$post(args, options))
}

export async function postV1DataplanesCreate(
  args: InferRequestType<typeof client.v1.dataplanes.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.create.$post(args, options))
}

export async function postV1DataplanesUpdate(
  args: InferRequestType<typeof client.v1.dataplanes.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.update.$post(args, options))
}

export async function postV1DataplanesDelete(
  args: InferRequestType<typeof client.v1.dataplanes.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.delete.$post(args, options))
}

export async function postV1DataplanesList(
  args: InferRequestType<typeof client.v1.dataplanes.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.list.$post(args, options))
}

export async function postV1DataplanesToken(
  args: InferRequestType<typeof client.v1.dataplanes.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.token.$post(args, options))
}

export async function postV1DataplanesHeartbeat(
  args: InferRequestType<typeof client.v1.dataplanes.heartbeat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.heartbeat.$post(args, options))
}

export async function postV1DataplanesSecretStoragesList(
  args: InferRequestType<typeof client.v1.dataplanes.secret_storages.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.secret_storages.list.$post(args, options))
}

export async function postV1DataplanesHealth(
  args: InferRequestType<typeof client.v1.dataplanes.health.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.health.$post(args, options))
}

export async function postV1DataplanesInitialize(
  args: InferRequestType<typeof client.v1.dataplanes.initialize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.dataplanes.initialize.$post(args, options))
}

export async function postV1SsoConfigGet(
  args: InferRequestType<typeof client.v1.sso_config.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sso_config.get.$post(args, options))
}

export async function postV1SsoConfigCreate(
  args: InferRequestType<typeof client.v1.sso_config.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sso_config.create.$post(args, options))
}

export async function postV1SsoConfigDelete(
  args: InferRequestType<typeof client.v1.sso_config.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sso_config.delete.$post(args, options))
}

export async function postV1SsoConfigUpdateCredentials(
  args: InferRequestType<typeof client.v1.sso_config.update_credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sso_config.update_credentials.$post(args, options))
}

export async function postV1SsoConfigActivate(
  args: InferRequestType<typeof client.v1.sso_config.activate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sso_config.activate.$post(args, options))
}

export async function postV1SsoConfigValidateToken(
  args: InferRequestType<typeof client.v1.sso_config.validate_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sso_config.validate_token.$post(args, options))
}

export async function postV1ScimConfigGet(
  args: InferRequestType<typeof client.v1.scim_config.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scim_config.get.$post(args, options))
}

export async function postV1ScimConfigEnable(
  args: InferRequestType<typeof client.v1.scim_config.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scim_config.enable.$post(args, options))
}

export async function postV1ScimConfigRotateToken(
  args: InferRequestType<typeof client.v1.scim_config.rotate_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scim_config.rotate_token.$post(args, options))
}

export async function postV1ScimConfigDisable(
  args: InferRequestType<typeof client.v1.scim_config.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scim_config.disable.$post(args, options))
}

export async function postV1AuditLogsList(
  args: InferRequestType<typeof client.v1.audit_logs.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audit_logs.list.$post(args, options))
}

export async function getPublic(options?: ClientRequestOptions) {
  return await parseResponse(client.public.$get(undefined, options))
}

export async function getPublicV1Health(options?: ClientRequestOptions) {
  return await parseResponse(client.public.v1.health.$get(undefined, options))
}

export async function getPublicV1Applications(options?: ClientRequestOptions) {
  return await parseResponse(client.public.v1.applications.$get(undefined, options))
}

export async function postPublicV1Applications(
  args: InferRequestType<typeof client.public.v1.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.applications.$post(args, options))
}

export async function getPublicV1ApplicationsApplicationId(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.applications[':applicationId'].$get(args, options))
}

export async function deletePublicV1ApplicationsApplicationId(
  args: InferRequestType<(typeof client.public.v1.applications)[':applicationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.applications[':applicationId'].$delete(args, options))
}

export async function postPublicV1ApplicationsToken(
  args: InferRequestType<typeof client.public.v1.applications.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.applications.token.$post(args, options))
}

export async function getPublicV1Jobs(
  args: InferRequestType<typeof client.public.v1.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.jobs.$get(args, options))
}

export async function postPublicV1Jobs(
  args: InferRequestType<typeof client.public.v1.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.jobs.$post(args, options))
}

export async function getPublicV1JobsJobId(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.jobs[':jobId'].$get(args, options))
}

export async function deletePublicV1JobsJobId(
  args: InferRequestType<(typeof client.public.v1.jobs)[':jobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.jobs[':jobId'].$delete(args, options))
}

export async function getPublicV1Regions(
  args: InferRequestType<typeof client.public.v1.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.regions.$get(args, options))
}

export async function postPublicV1Regions(
  args: InferRequestType<typeof client.public.v1.regions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.regions.$post(args, options))
}

export async function getPublicV1RegionsRegionId(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.regions[':regionId'].$get(args, options))
}

export async function deletePublicV1RegionsRegionId(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.regions[':regionId'].$delete(args, options))
}

export async function patchPublicV1RegionsRegionId(
  args: InferRequestType<(typeof client.public.v1.regions)[':regionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.regions[':regionId'].$patch(args, options))
}

export async function getPublicV1Dataplanes(
  args: InferRequestType<typeof client.public.v1.dataplanes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.dataplanes.$get(args, options))
}

export async function postPublicV1Dataplanes(
  args: InferRequestType<typeof client.public.v1.dataplanes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.dataplanes.$post(args, options))
}

export async function getPublicV1DataplanesDataplaneId(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.dataplanes[':dataplaneId'].$get(args, options))
}

export async function deletePublicV1DataplanesDataplaneId(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.dataplanes[':dataplaneId'].$delete(args, options))
}

export async function patchPublicV1DataplanesDataplaneId(
  args: InferRequestType<(typeof client.public.v1.dataplanes)[':dataplaneId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.dataplanes[':dataplaneId'].$patch(args, options))
}

export async function getPublicV1ConnectorDefinitions(
  args: InferRequestType<typeof client.public.v1.connector_definitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.connector_definitions.$get(args, options))
}

export async function getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$get(args, options),
  )
}

export async function postPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSources(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources.$post(
      args,
      options,
    ),
  )
}

export async function getPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
      ':definitionId'
    ].$get(args, options),
  )
}

export async function putPublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
      ':definitionId'
    ].$put(args, options),
  )
}

export async function deletePublicV1WorkspacesWorkspaceIdDefinitionsDeclarativeSourcesDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['declarative_sources'][':definitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.declarative_sources[
      ':definitionId'
    ].$delete(args, options),
  )
}

export async function getPublicV1WorkspacesWorkspaceIdDefinitionsSources(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.sources.$get(args, options),
  )
}

export async function postPublicV1WorkspacesWorkspaceIdDefinitionsSources(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.sources.$post(args, options),
  )
}

export async function getPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$get(
      args,
      options,
    ),
  )
}

export async function putPublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$put(
      args,
      options,
    ),
  )
}

export async function deletePublicV1WorkspacesWorkspaceIdDefinitionsSourcesDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['sources'][':definitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.sources[':definitionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getPublicV1WorkspacesWorkspaceIdDefinitionsDestinations(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.destinations.$get(args, options),
  )
}

export async function postPublicV1WorkspacesWorkspaceIdDefinitionsDestinations(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.destinations.$post(args, options),
  )
}

export async function getPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.destinations[':definitionId'].$get(
      args,
      options,
    ),
  )
}

export async function putPublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.destinations[':definitionId'].$put(
      args,
      options,
    ),
  )
}

export async function deletePublicV1WorkspacesWorkspaceIdDefinitionsDestinationsDefinitionId(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['definitions']['destinations'][':definitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].definitions.destinations[':definitionId'].$delete(
      args,
      options,
    ),
  )
}

export async function getPublicV1Sources(
  args: InferRequestType<typeof client.public.v1.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources.$get(args, options))
}

export async function postPublicV1Sources(
  args: InferRequestType<typeof client.public.v1.sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources.$post(args, options))
}

export async function getPublicV1SourcesSourceId(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources[':sourceId'].$get(args, options))
}

export async function putPublicV1SourcesSourceId(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources[':sourceId'].$put(args, options))
}

export async function deletePublicV1SourcesSourceId(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources[':sourceId'].$delete(args, options))
}

export async function patchPublicV1SourcesSourceId(
  args: InferRequestType<(typeof client.public.v1.sources)[':sourceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources[':sourceId'].$patch(args, options))
}

export async function getPublicV1Destinations(
  args: InferRequestType<typeof client.public.v1.destinations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.destinations.$get(args, options))
}

export async function postPublicV1Destinations(
  args: InferRequestType<typeof client.public.v1.destinations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.destinations.$post(args, options))
}

export async function getPublicV1DestinationsDestinationId(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.destinations[':destinationId'].$get(args, options))
}

export async function putPublicV1DestinationsDestinationId(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.destinations[':destinationId'].$put(args, options))
}

export async function deletePublicV1DestinationsDestinationId(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.destinations[':destinationId'].$delete(args, options))
}

export async function patchPublicV1DestinationsDestinationId(
  args: InferRequestType<(typeof client.public.v1.destinations)[':destinationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.destinations[':destinationId'].$patch(args, options))
}

export async function getPublicV1OauthCallback(
  args: InferRequestType<typeof client.public.v1.oauth.callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.oauth.callback.$get(args, options))
}

export async function postPublicV1SourcesInitiateOAuth(
  args: InferRequestType<typeof client.public.v1.sources.initiateOAuth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.sources.initiateOAuth.$post(args, options))
}

export async function getPublicV1Connections(
  args: InferRequestType<typeof client.public.v1.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.connections.$get(args, options))
}

export async function postPublicV1Connections(
  args: InferRequestType<typeof client.public.v1.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.connections.$post(args, options))
}

export async function getPublicV1ConnectionsConnectionId(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.connections[':connectionId'].$get(args, options))
}

export async function deletePublicV1ConnectionsConnectionId(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.connections[':connectionId'].$delete(args, options))
}

export async function patchPublicV1ConnectionsConnectionId(
  args: InferRequestType<(typeof client.public.v1.connections)[':connectionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.connections[':connectionId'].$patch(args, options))
}

export async function getPublicV1Streams(
  args: InferRequestType<typeof client.public.v1.streams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.streams.$get(args, options))
}

export async function getPublicV1Workspaces(
  args: InferRequestType<typeof client.public.v1.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.workspaces.$get(args, options))
}

export async function postPublicV1Workspaces(
  args: InferRequestType<typeof client.public.v1.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.workspaces.$post(args, options))
}

export async function getPublicV1WorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.workspaces[':workspaceId'].$get(args, options))
}

export async function deletePublicV1WorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.workspaces[':workspaceId'].$delete(args, options))
}

export async function patchPublicV1WorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.public.v1.workspaces)[':workspaceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.workspaces[':workspaceId'].$patch(args, options))
}

export async function putPublicV1WorkspacesWorkspaceIdOauthCredentials(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].oauthCredentials.$put(args, options),
  )
}

export async function deletePublicV1WorkspacesWorkspaceIdOauthCredentialsActorTypeName(
  args: InferRequestType<
    (typeof client.public.v1.workspaces)[':workspaceId']['oauthCredentials'][':actorType'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.workspaces[':workspaceId'].oauthCredentials[':actorType'][':name'].$delete(
      args,
      options,
    ),
  )
}

export async function getPublicV1PermissionsPermissionId(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.permissions[':permissionId'].$get(args, options))
}

export async function deletePublicV1PermissionsPermissionId(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.permissions[':permissionId'].$delete(args, options))
}

export async function patchPublicV1PermissionsPermissionId(
  args: InferRequestType<(typeof client.public.v1.permissions)[':permissionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.permissions[':permissionId'].$patch(args, options))
}

export async function getPublicV1Permissions(
  args: InferRequestType<typeof client.public.v1.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.permissions.$get(args, options))
}

export async function postPublicV1Permissions(
  args: InferRequestType<typeof client.public.v1.permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.permissions.$post(args, options))
}

export async function getPublicV1Organizations(options?: ClientRequestOptions) {
  return await parseResponse(client.public.v1.organizations.$get(undefined, options))
}

export async function putPublicV1OrganizationsOrganizationIdOauthCredentials(
  args: InferRequestType<
    (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.organizations[':organizationId'].oauthCredentials.$put(args, options),
  )
}

export async function deletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeName(
  args: InferRequestType<
    (typeof client.public.v1.organizations)[':organizationId']['oauthCredentials'][':actorType'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.organizations[':organizationId'].oauthCredentials[':actorType'][
      ':name'
    ].$delete(args, options),
  )
}

export async function getPublicV1Users(
  args: InferRequestType<typeof client.public.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.users.$get(args, options))
}

export async function getPublicV1Groups(
  args: InferRequestType<typeof client.public.v1.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups.$get(args, options))
}

export async function postPublicV1Groups(
  args: InferRequestType<typeof client.public.v1.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups.$post(args, options))
}

export async function getPublicV1GroupsGroupId(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].$get(args, options))
}

export async function deletePublicV1GroupsGroupId(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].$delete(args, options))
}

export async function patchPublicV1GroupsGroupId(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].$patch(args, options))
}

export async function getPublicV1GroupsGroupIdMembers(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].members.$get(args, options))
}

export async function postPublicV1GroupsGroupIdMembers(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].members.$post(args, options))
}

export async function deletePublicV1GroupsGroupIdMembersUserId(
  args: InferRequestType<
    (typeof client.public.v1.groups)[':groupId']['members'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.groups[':groupId'].members[':userId'].$delete(args, options),
  )
}

export async function getPublicV1GroupsGroupIdPermissions(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].permissions.$get(args, options))
}

export async function postPublicV1GroupsGroupIdPermissions(
  args: InferRequestType<(typeof client.public.v1.groups)[':groupId']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.groups[':groupId'].permissions.$post(args, options))
}

export async function deletePublicV1GroupsGroupIdPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.public.v1.groups)[':groupId']['permissions'][':permissionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.v1.groups[':groupId'].permissions[':permissionId'].$delete(args, options),
  )
}

export async function getPublicV1Tags(
  args: InferRequestType<typeof client.public.v1.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.tags.$get(args, options))
}

export async function postPublicV1Tags(
  args: InferRequestType<typeof client.public.v1.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.tags.$post(args, options))
}

export async function getPublicV1TagsTagId(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.tags[':tagId'].$get(args, options))
}

export async function deletePublicV1TagsTagId(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.tags[':tagId'].$delete(args, options))
}

export async function patchPublicV1TagsTagId(
  args: InferRequestType<(typeof client.public.v1.tags)[':tagId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.tags[':tagId'].$patch(args, options))
}

export async function postPublicV1EmbeddedWidgetToken(
  args: InferRequestType<typeof client.public.v1.embedded.widget_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.embedded.widget_token.$post(args, options))
}

export async function postPublicV1EmbeddedScopedToken(
  args: InferRequestType<typeof client.public.v1.embedded.scoped_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.v1.embedded.scoped_token.$post(args, options))
}

export async function getPublicV1EmbeddedOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.public.v1.embedded.organizations.$get(undefined, options))
}

export async function postV1ServiceAccountsToken(
  args: InferRequestType<typeof client.v1.service_accounts.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.service_accounts.token.$post(args, options))
}

export async function postV1DomainVerificationsCreate(
  args: InferRequestType<typeof client.v1.domain_verifications.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain_verifications.create.$post(args, options))
}

export async function postV1DomainVerificationsList(
  args: InferRequestType<typeof client.v1.domain_verifications.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain_verifications.list.$post(args, options))
}

export async function postV1DomainVerificationsDelete(
  args: InferRequestType<typeof client.v1.domain_verifications.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain_verifications.delete.$post(args, options))
}

export async function postV1DomainVerificationsReset(
  args: InferRequestType<typeof client.v1.domain_verifications.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain_verifications.reset.$post(args, options))
}

export async function postV1AirbyteReleasesCreate(
  args: InferRequestType<typeof client.v1.airbyte_releases.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.airbyte_releases.create.$post(args, options))
}

export async function postV1PrivateLinkCreate(
  args: InferRequestType<typeof client.v1.private_link.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private_link.create.$post(args, options))
}

export async function postV1PrivateLinkList(
  args: InferRequestType<typeof client.v1.private_link.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private_link.list.$post(args, options))
}

export async function postV1PrivateLinkDelete(
  args: InferRequestType<typeof client.v1.private_link.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private_link.delete.$post(args, options))
}

export async function postV1PrivateLinkGet(
  args: InferRequestType<typeof client.v1.private_link.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private_link.get.$post(args, options))
}

export async function postV1PrivateLinkUpdate(
  args: InferRequestType<typeof client.v1.private_link.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private_link.update.$post(args, options))
}

export async function postV1PrivateLinkListByStatus(
  args: InferRequestType<typeof client.v1.private_link.list_by_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.private_link.list_by_status.$post(args, options))
}

export async function getV1OrganizationsOrganizationIdToolCallsUsage(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['tool_calls']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].tool_calls.usage.$get(args, options),
  )
}
