import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getOrganizationsIndex(
  args: InferRequestType<typeof client.organizations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.index.$get(args, options))
}

export async function getOrganizationsOrganizationIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].index.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugAgentsConversationsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].agents.conversations.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].agents.conversations[
      ':conversation_id'
    ].index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].artifactbundle.assemble.index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugAvailableActionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['available-actions'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugChunkUploadIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['chunk-upload'].index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugChunkUploadIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['chunk-upload'].index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugCodeMappingsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['code-mappings'].index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugCodeMappingsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['code-mappings'].index.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['code-mappings'][':config_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['code-mappings'][':config_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['code-mappings'].bulk.index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['codeowners-associations'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].config.integrations.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDashboardsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugDashboardsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards[
      ':dashboard_id'
    ].revisions.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].revisions[
      ':revision_id'
    ].restore.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDetectorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].detectors.index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugDetectorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].detectors.index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugDetectorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].detectors.index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDiscoverSavedIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].discover.saved.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugDiscoverSavedIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].discover.saved.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugDsnLookupIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['dsn-lookup'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].environments.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugEventidsEventIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].eventids[':event_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugEventsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].events.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugEventsDroppedIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['events-dropped'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['events-timeseries'].index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugExternalUsersIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['external-users'].index.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['external-users'][
      ':external_user_id'
    ].index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['external-users'][
      ':external_user_id'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugFlagsLogsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].flags.logs.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].flags.logs[':flag_log_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugForwardingIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].forwarding.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugForwardingIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].forwarding.index.$post(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].forwarding[':data_forwarder_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].forwarding[':data_forwarder_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['group-search-views'].index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['group-search-views'].index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIntegrationsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].integrations.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].integrations[':integration_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].integrations[':integration_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].integrations[':integration_id'][
      'channel-validate'
    ].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].integrations[
      ':integration_id'
    ].channels.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].integrations[
      ':integration_id'
    ].repos.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues.index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugIssuesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues.index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugIssuesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues.index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugMembersIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugMembersIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugMembersMemberIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members[':member_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugMembersMemberIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members[':member_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members[':member_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
      ':team_id_or_slug'
    ].index.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
      ':team_id_or_slug'
    ].index.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
      ':team_id_or_slug'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugMonitorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].monitors.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugMonitorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].monitors.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].monitors[':monitor_id_or_slug'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].monitors[':monitor_id_or_slug'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].monitors[':monitor_id_or_slug'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].monitors[
      ':monitor_id_or_slug'
    ].checkins.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugNotebooksIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notebooks.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks.index.$post(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks[
      ':block_id'
    ].index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks[
      ':block_id'
    ].index.$delete(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notebooks[
      ':notebook_id'
    ].blocks.order.index.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugNotificationsActionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notifications.actions.index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugNotificationsActionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notifications.actions.index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notifications.actions[':action_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notifications.actions[':action_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].notifications.actions[
      ':action_id'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['org-auth-tokens'][':token_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
      'install-details'
    ].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
      'size-analysis'
    ].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
      ':snapshot_id'
    ].index.$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
      ':snapshot_id'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
      ':snapshot_id'
    ].archive.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
      ':snapshot_id'
    ].archive.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
      ':snapshot_id'
    ].images[':image_identifier'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
      'latest-base'
    ].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugProfilingChunksIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].profiling.chunks.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].profiling.flamegraph.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugProjectKeysIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['project-keys'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugProjectsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].projects.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugProjectsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].projects.index.$post(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].projects[
      ':project_id_or_slug'
    ].detectors.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugRelayUsageIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].relay_usage.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['release-threshold-statuses'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugReleasesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugReleasesVersionIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].commits.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].files[
      ':file_id'
    ].index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].files[
      ':file_id'
    ].index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].files[
      ':file_id'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'][
      'previous-with-commits'
    ].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReplayCountIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['replay-count'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReplaySelectorsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['replay-selectors'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReplaysIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].replays.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].replays[':replay_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReposIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].repos.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].repos[':repo_id'].commits.index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugReposSettingsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].repos.settings.index.$put(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2Groups(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Groups.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugScimV2Groups(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Groups.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$delete(
      args,
      options,
    ),
  )
}

export async function patchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$patch(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypes(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeName(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes[
      ':resource_type_name'
    ].$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUri(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Schemas[':schema_uri'].$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfig(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.ServiceProviderConfig.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2Users(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Users.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugScimV2Users(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Users.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugScimV2UsersMemberId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchOrganizationsOrganizationIdOrSlugScimV2UsersMemberId(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['sentry-app-components'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugSentryAppsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['sentry-apps'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugSessionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].sessions.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].shortids[':issue_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['starred-service-spans'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['starred-service-spans'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugStatsSummaryIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['stats-summary'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugStatsV2Index(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].stats_v2.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTagsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].tags.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTeamsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].teams.index.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugTeamsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].teams.index.$post(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['trace-items'].attributes.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['trace-items'].metrics.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['trace-items'].stats.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTraceLogsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['trace-logs'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['trace-meta'][':trace_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugTraceTraceIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].trace[':trace_id'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugUserTeamsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['user-teams'].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugWorkflowsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows.index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugWorkflowsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows.index.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugWorkflowsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows.index.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugWorkflowsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows.index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$get(args, options),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$put(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'][
      'code-mapping-prefixes'
    ].stack.index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
      ':codeowners_id'
    ].index.$get(args, options),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
      ':codeowners_id'
    ].index.$put(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
      ':codeowners_id'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'][
      'custom-inbound-filters'
    ].index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'][
      'custom-inbound-filters'
    ].index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][
      ':filter_id'
    ].index.$get(args, options),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][
      ':filter_id'
    ].index.$put(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][
      ':filter_id'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments.index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments.index.$put(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
      ':environment'
    ].index.$get(args, options),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
      ':environment'
    ].index.$put(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].events.index.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
      ':event_id'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
      ':event_id'
    ].attachments.index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
      ':event_id'
    ].attachments[':attachment_id'].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[':event_id'][
      'source-map-debug'
    ].index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][
      ':project_id_or_slug'
    ].files.difs.assemble.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].files.dsyms.index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][
      ':project_id_or_slug'
    ].files.preprodartifacts.assemble.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters.index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters[
      ':filter_id'
    ].index.$put(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[':key_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[':key_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
      ':key_id'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].members.index.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
      ':monitor_id_or_slug'
    ].index.$get(args, options),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
      ':monitor_id_or_slug'
    ].index.$put(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
      ':monitor_id_or_slug'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
      ':monitor_id_or_slug'
    ].checkins.index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$put(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod['size-analysis'][
      'status-check-rules'
    ].index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod['size-analysis'][
      'status-checks'
    ].skip.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
      'status-check-rules'
    ].index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
      'status-checks'
    ].skip.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprodartifacts[
      'build-distribution'
    ].latest.index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][
      ':project_id_or_slug'
    ].preprodartifacts.snapshots.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].profiling.profiles[
      ':profile_id'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases.index.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
      ':version'
    ].commits.index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
      ':version'
    ].files.index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
      ':version'
    ].files.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[':version'].files[
      ':file_id'
    ].index.$get(args, options),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[':version'].files[
      ':file_id'
    ].index.$put(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[':version'].files[
      ':file_id'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][
      ':project_id_or_slug'
    ].releases.completion.index.$get(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
      ':replay_id'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
      ':replay_id'
    ].clicks.index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
      'recording-segments'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
      'recording-segments'
    ][':segment_id'].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
      'viewed-by'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][
      ':project_id_or_slug'
    ].replays.jobs.delete.index.$get(args, options),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][
      ':project_id_or_slug'
    ].replays.jobs.delete.index.$post(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays.jobs.delete[
      ':job_id'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$put(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'][
      'stacktrace-link'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].stats.index.$get(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources'].index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources'].index.$put(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'][
      'symbol-sources'
    ].index.$post(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'][
      'symbol-sources'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams.index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams[
      ':team_id_or_slug'
    ].index.$post(args, options),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams[
      ':team_id_or_slug'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][
      ':item_id'
    ].index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['user-feedback'].index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug']['user-feedback'].index.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].users.index.$get(
      args,
      options,
    ),
  )
}

export async function getSeerModelsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.seer.models.index.$get(undefined, options))
}

export async function postSentryAppInstallationsUuidExternalIssueActionsIndex(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-app-installations'][':uuid']['external-issue-actions'].index.$post(
      args,
      options,
    ),
  )
}

export async function getSentryAppInstallationsUuidExternalRequestsIndex(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-app-installations'][':uuid']['external-requests'].index.$get(args, options),
  )
}

export async function getSentryAppsSentryAppIdOrSlugIndex(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-apps'][':sentry_app_id_or_slug'].index.$get(args, options),
  )
}

export async function putSentryAppsSentryAppIdOrSlugIndex(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-apps'][':sentry_app_id_or_slug'].index.$put(args, options),
  )
}

export async function deleteSentryAppsSentryAppIdOrSlugIndex(
  args: InferRequestType<
    (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-apps'][':sentry_app_id_or_slug'].index.$delete(args, options),
  )
}

export async function getTeamsOrganizationIdOrSlugTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$get(args, options),
  )
}

export async function putTeamsOrganizationIdOrSlugTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$put(args, options),
  )
}

export async function deleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$delete(args, options),
  )
}

export async function postTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'].index.$post(
      args,
      options,
    ),
  )
}

export async function putTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][
      ':external_team_id'
    ].index.$put(args, options),
  )
}

export async function deleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][
      ':external_team_id'
    ].index.$delete(args, options),
  )
}

export async function getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug'].members.index.$get(args, options),
  )
}

export async function getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$get(args, options),
  )
}

export async function postTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$post(
      args,
      options,
    ),
  )
}

export async function getUsersUserIdIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].index.$get(args, options))
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].tags[
      ':key'
    ].values.index.$get(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[':hook_id'].index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[':hook_id'].index.$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
      ':hook_id'
    ].index.$delete(args, options),
  )
}

export async function getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$get(
      args,
      options,
    ),
  )
}

export async function putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$put(
      args,
      options,
    ),
  )
}

export async function deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].releases[':version'].commitfiles.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['sentry-app-installations'].index.$get(
      args,
      options,
    ),
  )
}

export async function postSentryAppInstallationsUuidExternalIssuesIndex(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-app-installations'][':uuid']['external-issues'].index.$post(args, options),
  )
}

export async function deleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndex(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sentry-app-installations'][':uuid']['external-issues'][
      ':external_issue_id'
    ].index.$delete(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['spike-protections'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug']['spike-protections'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$put(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$delete(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$get(
      args,
      options,
    ),
  )
}

export async function postOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$post(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].events.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].events[
      ':event_id'
    ].index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'][
      'external-issues'
    ].index.$get(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id']['external-issues'][
      ':external_issue_id'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].hashes.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations.index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
      ':integration_id'
    ].index.$get(args, options),
  )
}

export async function putOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
      ':integration_id'
    ].index.$put(args, options),
  )
}

export async function postOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
      ':integration_id'
    ].index.$post(args, options),
  )
}

export async function deleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
      ':integration_id'
    ].index.$delete(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[':key'].index.$get(
      args,
      options,
    ),
  )
}

export async function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
      ':key'
    ].values.index.$get(args, options),
  )
}

export async function getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndex(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id_or_slug'].shared.issues[':share_id'].index.$get(
      args,
      options,
    ),
  )
}
