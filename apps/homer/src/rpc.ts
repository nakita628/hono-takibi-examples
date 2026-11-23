import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthSessions(
  args: InferRequestType<typeof client.auth.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.sessions.$post(args, options))
}

export async function deleteAuthSessionsSessionId(
  args: InferRequestType<(typeof client.auth.sessions)[':sessionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.sessions[':sessionId'].$delete(args, options))
}

export async function getAuthProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.providers.$get(undefined, options))
}

export async function getAuthOauth2ProviderRedirect(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['redirect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.oauth2[':provider'].redirect.$get(args, options))
}

export async function getAuthOauth2ProviderCallback(
  args: InferRequestType<(typeof client.auth.oauth2)[':provider']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.oauth2[':provider'].callback.$get(args, options))
}

export async function postAuthOauth2Token(
  args: InferRequestType<typeof client.auth.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.oauth2.token.$post(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$delete(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$patch(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getMeSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.me.settings.$get(undefined, options))
}

export async function putMeSettingsCategory(
  args: InferRequestType<(typeof client.me.settings)[':category']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.settings[':category'].$put(args, options))
}

export async function deleteMeSettingsCategory(
  args: InferRequestType<(typeof client.me.settings)[':category']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.settings[':category'].$delete(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function postTransactionsSearch(
  args: InferRequestType<typeof client.transactions.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.search.$post(args, options))
}

export async function postTransactionsMessages(
  args: InferRequestType<typeof client.transactions.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.messages.$post(args, options))
}

export async function getMessagesMessageId(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':messageId'].$get(args, options))
}

export async function getMessagesMessageIdDecoded(
  args: InferRequestType<(typeof client.messages)[':messageId']['decoded']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':messageId'].decoded.$get(args, options))
}

export async function postTransactionsQos(
  args: InferRequestType<typeof client.transactions.qos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.qos.$post(args, options))
}

export async function postExports(
  args: InferRequestType<typeof client.exports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.$post(args, options))
}

export async function getExportsExportId(
  args: InferRequestType<(typeof client.exports)[':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':exportId'].$get(args, options))
}

export async function getExportsExportIdDownload(
  args: InferRequestType<(typeof client.exports)[':exportId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':exportId'].download.$get(args, options))
}

export async function postImportsPcap(
  args: InferRequestType<typeof client.imports.pcap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.pcap.$post(args, options))
}

export async function getDashboards(
  args: InferRequestType<typeof client.dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.$get(args, options))
}

export async function postDashboards(
  args: InferRequestType<typeof client.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.$post(args, options))
}

export async function getDashboardsDashboardId(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardId'].$get(args, options))
}

export async function putDashboardsDashboardId(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardId'].$put(args, options))
}

export async function deleteDashboardsDashboardId(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardId'].$delete(args, options))
}

export async function postMeDashboardsReset(options?: ClientRequestOptions) {
  return await parseResponse(client.me.dashboards.reset.$post(undefined, options))
}

export async function getMappings(
  args: InferRequestType<typeof client.mappings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mappings.$get(args, options))
}

export async function postMappings(
  args: InferRequestType<typeof client.mappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mappings.$post(args, options))
}

export async function getMappingsMappingId(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mappings[':mappingId'].$get(args, options))
}

export async function putMappingsMappingId(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mappings[':mappingId'].$put(args, options))
}

export async function deleteMappingsMappingId(
  args: InferRequestType<(typeof client.mappings)[':mappingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mappings[':mappingId'].$delete(args, options))
}

export async function getMappingsFields(
  args: InferRequestType<typeof client.mappings.fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mappings.fields.$get(args, options))
}

export async function getHepsubs(
  args: InferRequestType<typeof client.hepsubs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hepsubs.$get(args, options))
}

export async function postHepsubs(
  args: InferRequestType<typeof client.hepsubs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hepsubs.$post(args, options))
}

export async function getHepsubsHepsubId(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hepsubs[':hepsubId'].$get(args, options))
}

export async function putHepsubsHepsubId(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hepsubs[':hepsubId'].$put(args, options))
}

export async function deleteHepsubsHepsubId(
  args: InferRequestType<(typeof client.hepsubs)[':hepsubId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hepsubs[':hepsubId'].$delete(args, options))
}

export async function getAliases(
  args: InferRequestType<typeof client.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.$get(args, options))
}

export async function postAliases(
  args: InferRequestType<typeof client.aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.$post(args, options))
}

export async function putAliasesAliasId(
  args: InferRequestType<(typeof client.aliases)[':aliasId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases[':aliasId'].$put(args, options))
}

export async function deleteAliasesAliasId(
  args: InferRequestType<(typeof client.aliases)[':aliasId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases[':aliasId'].$delete(args, options))
}

export async function getIpaliases(
  args: InferRequestType<typeof client.ipaliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipaliases.$get(args, options))
}

export async function postIpaliases(
  args: InferRequestType<typeof client.ipaliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipaliases.$post(args, options))
}

export async function putIpaliasesAliasId(
  args: InferRequestType<(typeof client.ipaliases)[':aliasId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipaliases[':aliasId'].$put(args, options))
}

export async function deleteIpaliasesAliasId(
  args: InferRequestType<(typeof client.ipaliases)[':aliasId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipaliases[':aliasId'].$delete(args, options))
}

export async function getAdvanced(
  args: InferRequestType<typeof client.advanced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced.$get(args, options))
}

export async function postAdvanced(
  args: InferRequestType<typeof client.advanced.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced.$post(args, options))
}

export async function getAdvancedGuid(
  args: InferRequestType<(typeof client.advanced)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced[':guid'].$get(args, options))
}

export async function putAdvancedGuid(
  args: InferRequestType<(typeof client.advanced)[':guid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced[':guid'].$put(args, options))
}

export async function deleteAdvancedGuid(
  args: InferRequestType<(typeof client.advanced)[':guid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advanced[':guid'].$delete(args, options))
}

export async function getScripts(
  args: InferRequestType<typeof client.scripts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.$get(args, options))
}

export async function postScripts(
  args: InferRequestType<typeof client.scripts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.$post(args, options))
}

export async function getScriptsScriptId(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':scriptId'].$get(args, options))
}

export async function putScriptsScriptId(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':scriptId'].$put(args, options))
}

export async function deleteScriptsScriptId(
  args: InferRequestType<(typeof client.scripts)[':scriptId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts[':scriptId'].$delete(args, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function getAuthTokens(
  args: InferRequestType<(typeof client)['auth-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth-tokens'].$get(args, options))
}

export async function postAuthTokens(
  args: InferRequestType<(typeof client)['auth-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth-tokens'].$post(args, options))
}

export async function getAuthTokensTokenId(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth-tokens'][':tokenId'].$get(args, options))
}

export async function putAuthTokensTokenId(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth-tokens'][':tokenId'].$put(args, options))
}

export async function deleteAuthTokensTokenId(
  args: InferRequestType<(typeof client)['auth-tokens'][':tokenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth-tokens'][':tokenId'].$delete(args, options))
}

export async function getAgentsSubscriptions(
  args: InferRequestType<typeof client.agents.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.subscriptions.$get(args, options))
}

export async function postAgentsSubscriptions(
  args: InferRequestType<typeof client.agents.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.subscriptions.$post(args, options))
}

export async function getAgentsSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.subscriptions[':subscriptionId'].$get(args, options))
}

export async function putAgentsSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.subscriptions[':subscriptionId'].$put(args, options))
}

export async function deleteAgentsSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.agents.subscriptions)[':subscriptionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.subscriptions[':subscriptionId'].$delete(args, options))
}

export async function getAgentsTypes(
  args: InferRequestType<typeof client.agents.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.types.$get(args, options))
}

export async function getAgentsTypesType(
  args: InferRequestType<(typeof client.agents.types)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.types[':type'].$get(args, options))
}

export async function postAgentsSearch(
  args: InferRequestType<typeof client.agents.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agents.search.$post(args, options))
}

export async function getDbNodes(options?: ClientRequestOptions) {
  return await parseResponse(client.db.nodes.$get(undefined, options))
}

export async function getModules(options?: ClientRequestOptions) {
  return await parseResponse(client.modules.$get(undefined, options))
}

export async function postStatisticsQuery(
  args: InferRequestType<typeof client.statistics.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.query.$post(args, options))
}

export async function getStatisticsDatabases(
  args: InferRequestType<typeof client.statistics.databases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.databases.$get(args, options))
}

export async function getStatisticsMeasurements(
  args: InferRequestType<typeof client.statistics.measurements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.measurements.$get(args, options))
}

export async function getStatisticsMetrics(
  args: InferRequestType<typeof client.statistics.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.metrics.$get(args, options))
}

export async function getStatisticsTags(
  args: InferRequestType<typeof client.statistics.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.tags.$get(args, options))
}

export async function getLogsLokiLabels(
  args: InferRequestType<typeof client.logs.loki.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.loki.labels.$get(args, options))
}

export async function getLogsLokiValues(
  args: InferRequestType<typeof client.logs.loki.values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.loki.values.$get(args, options))
}

export async function postLogsLokiQuery(
  args: InferRequestType<typeof client.logs.loki.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.loki.query.$post(args, options))
}

export async function getIntegrationsGrafanaStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.grafana.status.$get(undefined, options))
}

export async function getIntegrationsGrafanaFolders(
  args: InferRequestType<typeof client.integrations.grafana.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.grafana.folders.$get(args, options))
}

export async function getIntegrationsGrafanaDashboardsUid(
  args: InferRequestType<(typeof client.integrations.grafana.dashboards)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.grafana.dashboards[':uid'].$get(args, options))
}

export async function getStreamHep(options?: ClientRequestOptions) {
  return await parseResponse(client.stream.hep.$get(undefined, options))
}
