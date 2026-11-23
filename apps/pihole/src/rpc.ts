import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.$get(undefined, options))
}

export async function postAuth(
  args: InferRequestType<typeof client.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.$post(args, options))
}

export async function deleteAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.$delete(undefined, options))
}

export async function deleteAuthSessionId(
  args: InferRequestType<(typeof client.auth.session)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.session[':id'].$delete(args, options))
}

export async function getAuthSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.sessions.$get(undefined, options))
}

export async function getAuthTotp(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.totp.$get(undefined, options))
}

export async function getAuthApp(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.app.$get(undefined, options))
}

export async function getStatsSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.summary.$get(undefined, options))
}

export async function getStatsDatabaseSummary(
  args: InferRequestType<typeof client.stats.database.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.database.summary.$get(args, options))
}

export async function getStatsUpstreams(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.upstreams.$get(undefined, options))
}

export async function getStatsDatabaseUpstreams(
  args: InferRequestType<typeof client.stats.database.upstreams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.database.upstreams.$get(args, options))
}

export async function getStatsTopDomains(
  args: InferRequestType<typeof client.stats.top_domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.top_domains.$get(args, options))
}

export async function getStatsDatabaseTopDomains(
  args: InferRequestType<typeof client.stats.database.top_domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.database.top_domains.$get(args, options))
}

export async function getStatsTopClients(
  args: InferRequestType<typeof client.stats.top_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.top_clients.$get(args, options))
}

export async function getStatsDatabaseTopClients(
  args: InferRequestType<typeof client.stats.database.top_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.database.top_clients.$get(args, options))
}

export async function getStatsQueryTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.query_types.$get(undefined, options))
}

export async function getStatsDatabaseQueryTypes(
  args: InferRequestType<typeof client.stats.database.query_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.database.query_types.$get(args, options))
}

export async function getStatsRecentBlocked(
  args: InferRequestType<typeof client.stats.recent_blocked.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.recent_blocked.$get(args, options))
}

export async function getHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.history.$get(undefined, options))
}

export async function getHistoryClients(
  args: InferRequestType<typeof client.history.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.clients.$get(args, options))
}

export async function getHistoryDatabase(
  args: InferRequestType<typeof client.history.database.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.database.$get(args, options))
}

export async function getHistoryDatabaseClients(
  args: InferRequestType<typeof client.history.database.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.database.clients.$get(args, options))
}

export async function getQueries(
  args: InferRequestType<typeof client.queries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries.$get(args, options))
}

export async function getQueriesSuggestions(options?: ClientRequestOptions) {
  return await parseResponse(client.queries.suggestions.$get(undefined, options))
}

export async function getDnsBlocking(options?: ClientRequestOptions) {
  return await parseResponse(client.dns.blocking.$get(undefined, options))
}

export async function postDnsBlocking(
  args: InferRequestType<typeof client.dns.blocking.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns.blocking.$post(args, options))
}

export async function putDomainsTypeKindDomain(
  args: InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':type'][':kind'][':domain'].$put(args, options))
}

export async function deleteDomainsTypeKindDomain(
  args: InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':type'][':kind'][':domain'].$delete(args, options))
}

export async function postDomainsTypeKind(
  args: InferRequestType<(typeof client.domains)[':type'][':kind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':type'][':kind'].$post(args, options))
}

export async function postDomainsBatchDelete(
  args: InferRequestType<(typeof client)['domains:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['domains:batchDelete'].$post(args, options))
}

export async function getGroupsName(
  args: InferRequestType<(typeof client.groups)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':name'].$get(args, options))
}

export async function putGroupsName(
  args: InferRequestType<(typeof client.groups)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':name'].$put(args, options))
}

export async function deleteGroupsName(
  args: InferRequestType<(typeof client.groups)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':name'].$delete(args, options))
}

export async function getGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.$get(undefined, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function postGroupsBatchDelete(
  args: InferRequestType<(typeof client)['groups:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups:batchDelete'].$post(args, options))
}

export async function getClientsClient(
  args: InferRequestType<(typeof client.clients)[':client']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':client'].$get(args, options))
}

export async function putClientsClient(
  args: InferRequestType<(typeof client.clients)[':client']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':client'].$put(args, options))
}

export async function deleteClientsClient(
  args: InferRequestType<(typeof client.clients)[':client']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':client'].$delete(args, options))
}

export async function getClients(options?: ClientRequestOptions) {
  return await parseResponse(client.clients.$get(undefined, options))
}

export async function postClients(
  args: InferRequestType<typeof client.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.$post(args, options))
}

export async function postClientsBatchDelete(
  args: InferRequestType<(typeof client)['clients:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['clients:batchDelete'].$post(args, options))
}

export async function getClientsSuggestions(
  args: InferRequestType<typeof client.clients._suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients._suggestions.$get(args, options))
}

export async function getListsList(
  args: InferRequestType<(typeof client.lists)[':list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list'].$get(args, options))
}

export async function putListsList(
  args: InferRequestType<(typeof client.lists)[':list']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list'].$put(args, options))
}

export async function deleteListsList(
  args: InferRequestType<(typeof client.lists)[':list']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list'].$delete(args, options))
}

export async function getLists(
  args: InferRequestType<typeof client.lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$get(args, options))
}

export async function postLists(
  args: InferRequestType<typeof client.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$post(args, options))
}

export async function postListsBatchDelete(
  args: InferRequestType<(typeof client)['lists:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['lists:batchDelete'].$post(args, options))
}

export async function getInfoClient(options?: ClientRequestOptions) {
  return await parseResponse(client.info.client.$get(undefined, options))
}

export async function getInfoSystem(options?: ClientRequestOptions) {
  return await parseResponse(client.info.system.$get(undefined, options))
}

export async function getInfoDatabase(options?: ClientRequestOptions) {
  return await parseResponse(client.info.database.$get(undefined, options))
}

export async function getInfoFtl(options?: ClientRequestOptions) {
  return await parseResponse(client.info.ftl.$get(undefined, options))
}

export async function getInfoHost(options?: ClientRequestOptions) {
  return await parseResponse(client.info.host.$get(undefined, options))
}

export async function getInfoSensors(options?: ClientRequestOptions) {
  return await parseResponse(client.info.sensors.$get(undefined, options))
}

export async function getInfoVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.info.version.$get(undefined, options))
}

export async function getInfoMessages(options?: ClientRequestOptions) {
  return await parseResponse(client.info.messages.$get(undefined, options))
}

export async function deleteInfoMessagesMessageId(
  args: InferRequestType<(typeof client.info.messages)[':message_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.messages[':message_id'].$delete(args, options))
}

export async function getInfoMessagesCount(options?: ClientRequestOptions) {
  return await parseResponse(client.info.messages.count.$get(undefined, options))
}

export async function getInfoMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.info.metrics.$get(undefined, options))
}

export async function getInfoLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.info.login.$get(undefined, options))
}

export async function getLogsDnsmasq(
  args: InferRequestType<typeof client.logs.dnsmasq.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.dnsmasq.$get(args, options))
}

export async function getLogsFtl(
  args: InferRequestType<typeof client.logs.ftl.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.ftl.$get(args, options))
}

export async function getLogsWebserver(
  args: InferRequestType<typeof client.logs.webserver.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.webserver.$get(args, options))
}

export async function getEndpoints(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints.$get(undefined, options))
}

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function patchConfig(
  args: InferRequestType<typeof client.config.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$patch(args, options))
}

export async function getConfigProperties(options?: ClientRequestOptions) {
  return await parseResponse(client.config._properties.$get(undefined, options))
}

export async function getConfigElement(
  args: InferRequestType<(typeof client.config)[':element']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config[':element'].$get(args, options))
}

export async function putConfigElementValue(
  args: InferRequestType<(typeof client.config)[':element'][':value']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config[':element'][':value'].$put(args, options))
}

export async function deleteConfigElementValue(
  args: InferRequestType<(typeof client.config)[':element'][':value']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config[':element'][':value'].$delete(args, options))
}

export async function getNetworkDevices(
  args: InferRequestType<typeof client.network.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.devices.$get(args, options))
}

export async function deleteNetworkDevicesDeviceId(
  args: InferRequestType<(typeof client.network.devices)[':device_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.devices[':device_id'].$delete(args, options))
}

export async function getNetworkGateway(
  args: InferRequestType<typeof client.network.gateway.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.gateway.$get(args, options))
}

export async function getNetworkRoutes(
  args: InferRequestType<typeof client.network.routes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.routes.$get(args, options))
}

export async function getNetworkInterfaces(
  args: InferRequestType<typeof client.network.interfaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network.interfaces.$get(args, options))
}

export async function getTeleporter(options?: ClientRequestOptions) {
  return await parseResponse(client.teleporter.$get(undefined, options))
}

export async function postTeleporter(
  args: InferRequestType<typeof client.teleporter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teleporter.$post(args, options))
}

export async function postActionGravity(
  args: InferRequestType<typeof client.action.gravity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.gravity.$post(args, options))
}

export async function postActionRestartdns(options?: ClientRequestOptions) {
  return await parseResponse(client.action.restartdns.$post(undefined, options))
}

export async function postActionFlushLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.action.flush.logs.$post(undefined, options))
}

export async function postActionFlushArp(options?: ClientRequestOptions) {
  return await parseResponse(client.action.flush.arp.$post(undefined, options))
}

export async function postActionFlushNetwork(options?: ClientRequestOptions) {
  return await parseResponse(client.action.flush.network.$post(undefined, options))
}

export async function getDhcpLeases(options?: ClientRequestOptions) {
  return await parseResponse(client.dhcp.leases.$get(undefined, options))
}

export async function deleteDhcpLeasesIp(
  args: InferRequestType<(typeof client.dhcp.leases)[':ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dhcp.leases[':ip'].$delete(args, options))
}

export async function getSearchDomain(
  args: InferRequestType<(typeof client.search)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':domain'].$get(args, options))
}

export async function getDocs(options?: ClientRequestOptions) {
  return await parseResponse(client.docs.$get(undefined, options))
}

export async function getPadd(
  args: InferRequestType<typeof client.padd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.padd.$get(args, options))
}
